import { useState } from "react";

export default function Files({ contract, account, shared, title }) {
  const [allfiles, setAllFiles] = useState([]);
  console.log("files:contract", contract);
  console.log("files:account", account);

  const GetAllFiles = async () => {
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (shared) {
        if (!Otheraddress) {
          alert("Enter The Address");
        } else {
          const files = await contract.display(Otheraddress);
          console.log("files", files);
          setAllFiles(files);
        }
      } else {
        const files = await contract.display(account);
        setAllFiles(files);
      }
    } catch (e) {
      alert("You don't have access");
      setAllFiles([]);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-slate-50 mb-4">{title}</div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
        {shared ? (
          <>
            <button
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg col-span-1 hover:scale-105 transition duration-300"
              onClick={GetAllFiles}
            >
              Load Files
            </button>
            <input
              type="text"
              placeholder="Enter Other's Address"
              className="address w-full col-span-2 p-3 rounded-lg border border-gray-300"
            />
          </>
        ) : (
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg w-full hover:scale-105 transition duration-300"
            onClick={GetAllFiles}
          >
            Load Files
          </button>
        )}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allfiles.map((file) => (
          <li
            key={file}
            className="flex justify-between gap-x-4 py-4 px-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition duration-300"
          >
            <div className="flex gap-x-4 items-center">
              <img
                className="h-24 w-24 rounded-full bg-gray-50"
                src={file}
                alt="File Thumbnail"
              />
              <div>
                <a href={file} target="_blank" rel="noopener noreferrer">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    {file.substring(60)}
                  </p>
                  <button className="py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm hover:scale-105 transition duration-300">
                    View
                  </button>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
