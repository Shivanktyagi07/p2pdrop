// import { useEffect, useState } from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import "./App.css";
// import { ethers } from "ethers";
// import { contractAbi, contractAddress } from "./utils/constants";
// import FileUpload from "./components/FileUpload";
// import Files from "./components/Files";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState("");
//   const [provider, setProvider] = useState("");

//   useEffect(() => {
//     if (window.ethereum) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const loadProvider = async () => {
//         if (provider) {
//           window.ethereum.on("chainChanged", () => {
//             window.location.reload();
//           });

//           window.ethereum.on("accountsChanged", () => {
//             window.location.reload();
//           });

//           await provider.send("eth_requestAccounts", []);
//           const signer = provider.getSigner();
//           const address = await signer.getAddress();
//           setAccount(address);
//           console.log("contractAddress ", contractAddress);
//           console.log("abi ", contractAbi);

//           const contract = new ethers.Contract(
//             contractAddress,
//             contractAbi,
//             signer
//           );
//           setContract(contract);
//           setProvider(provider);
//         } else {
//           console.log("MetaMask is not installed");
//         }
//       };

//       provider && loadProvider();
//     } else {
//       alert("Please Install Metamusk");
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
//       className="App"
//     >
//       {/* Header section remains centered */}
//       <div className="text-center mt-2">
//         <p className="text-5xl text-white font-black mt-2 md:mt-[80px]">
//           P2P Sharing (Ethereum, IPFS)
//         </p>
//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Not connected"}
//         </p>
//         <FileUpload account={account} provider={provider} contract={contract} />
//       </div>

//       {/* Left-aligned sections container */}
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         {" "}
//         {/* Added container for alignment */}
//         {/* My Files section */}
//         <div
//           id="files"
//           className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4"
//         >
//           <div className="text-left text-4xl font-bold text-white mb-4">
//             My Files
//           </div>
//           <Files contract={contract} account={account} />
//         </div>
//         {/* Shared Files section */}
//         <div className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4">
//           <div className="text-left text-4xl font-bold text-white mb-4">
//             Shared With Me
//           </div>
//           <Files
//             contract={contract}
//             account={account}
//             // title="Shared With Me"
//             shared="1"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import "./App.css";
// import { ethers } from "ethers";
// import { contractAbi, contractAddress } from "./utils/constants";
// import FileUpload from "./components/FileUpload";
// import Files from "./components/Files";

// function App() {
//   const [account, setAccount] = useState("");
//   const [contract, setContract] = useState("");
//   const [provider, setProvider] = useState("");

//   useEffect(() => {
//     if (window.ethereum) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const loadProvider = async () => {
//         if (provider) {
//           window.ethereum.on("chainChanged", () => {
//             window.location.reload();
//           });

//           window.ethereum.on("accountsChanged", () => {
//             window.location.reload();
//           });

//           await provider.send("eth_requestAccounts", []);
//           const signer = provider.getSigner();
//           const address = await signer.getAddress();
//           setAccount(address);
//           console.log("contractAddress ", contractAddress);
//           console.log("abi ", contractAbi);

//           const contract = new ethers.Contract(
//             contractAddress,
//             contractAbi,
//             signer
//           );
//           setContract(contract);
//           setProvider(provider);
//         } else {
//           console.log("MetaMask is not installed");
//         }
//       };

//       provider && loadProvider();
//     } else {
//       alert("Please Install MetaMask");
//     }
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
//       className="App"
//     >
//       {/* Animated P2P Sharing Text */}
//       <motion.div
//         className="text-center mt-2"
//         initial={{ y: -50, opacity: 0, scale: 0.95 }}
//         animate={{ y: 0, opacity: 1, scale: 1 }}
//         transition={{
//           duration: 1.5,
//           ease: [0.25, 0.46, 0.45, 0.94], // easeOutBack
//         }}
//       >
//         <p className="text-5xl text-white font-black mt-2 md:mt-[80px]">
//           P2P Sharing (Ethereum, IPFS)
//         </p>
//         <p style={{ color: "white" }}>
//           Account : {account ? account : "Not connected"}
//         </p>
//       </motion.div>

//       {/* File Upload Section */}
//       <FileUpload account={account} provider={provider} contract={contract} />

//       {/* Left-aligned sections container */}
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         {/* My Files section */}
//         <div
//           id="files"
//           className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4"
//         >
//           <div className="text-left text-4xl font-bold text-white mb-4">
//             My Files
//           </div>
//           <Files contract={contract} account={account} />
//         </div>

//         {/* Shared Files section */}
//         <div className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4">
//           <div className="text-left text-4xl font-bold text-white mb-4">
//             Shared With Me
//           </div>
//           <Files contract={contract} account={account} shared="1" />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "./utils/constants";
import FileUpload from "./components/FileUpload";
import Files from "./components/Files";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const loadProvider = async () => {
        if (provider) {
          window.ethereum.on("chainChanged", () => window.location.reload());
          window.ethereum.on("accountsChanged", () => window.location.reload());

          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          setAccount(address);

          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            signer
          );
          setContract(contract);
          setProvider(provider);
        }
      };
      provider && loadProvider();
    } else {
      alert("Please Install MetaMask");
    }
  }, []);

  const sectionAnim = {
    initial: { y: -50, opacity: 0, scale: 0.95 },
    animate: { y: 0, opacity: 1, scale: 1 },
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="App"
    >
      {/* Header / Title */}
      <motion.div className="text-center mt-2" {...sectionAnim}>
        <p className="text-5xl text-white font-black mt-2 md:mt-[80px]">
          P2P Sharing
        </p>
        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload account={account} provider={provider} contract={contract} />
      </motion.div>

      {/* Files Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4"
          {...sectionAnim}
        >
          <div className="text-left text-4xl font-bold text-white mb-4">
            My Files
          </div>
          <Files contract={contract} account={account} />
        </motion.div>

        {/* Shared With Me Section */}
        <motion.div
          className="bg-black bg-opacity-75 w-full sm:px-6 lg:px-8 py-5 md:py-10 mt-4"
          {...sectionAnim}
        >
          <div className="text-left text-4xl font-bold text-white mb-4">
            Shared With Me
          </div>
          <Files contract={contract} account={account} shared="1" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
