import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import { API_Key, API_Secret } from "../utils/constants";

const FileUpload = ({ contract, account }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: API_Key,
            pinata_secret_api_key: API_Secret,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account, ImgHash);

        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image ");
      }
    }
    // alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0];

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className=" flex items-center justify-center bg-transparent">
      <div className="flex flex-wrap mb-2 items-center gap-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-6 rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1">
        <form className="form" onSubmit={handleSubmit}>
          <label
            htmlFor="file-upload"
            className="choose block mb-2 text-lg font-semibold"
          >
            Choose Image
          </label>
          <input
            disabled={!account}
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
            className="mb-2"
          />
          <span className="textArea block mb-2">Image: {fileName}</span>
          <button
            type="submit"
            className="upload bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
            disabled={!file}
          >
            Upload File
          </button>
        </form>
      </div>
    </div>
  );
};
export default FileUpload;
