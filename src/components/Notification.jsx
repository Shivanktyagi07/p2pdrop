// // import React from "react";

// const notifications = [
//   {
//     title: "File received",
//     message:
//       "You received a file from 0xA4F...12b9 via direct peer connection.",
//     time: "2 minutes ago",
//   },
//   {
//     title: "Upload complete",
//     message: "Your file 'project_docs.zip' was successfully uploaded to IPFS.",
//     time: "10 minutes ago",
//   },
//   {
//     title: "Share request",
//     message: "User 0xBe9...2c4d requested to view your shared folder.",
//     time: "1 hour ago",
//   },
//   {
//     title: "Network status",
//     message: "Your peer connection is stable and secure.",
//     time: "Today, 9:00 AM",
//   },
// ];

// const Notification = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">🔔 Notifications</h1>
//       <div className="space-y-4 max-w-2xl mx-auto">
//         {notifications.map((note, idx) => (
//           <div
//             key={idx}
//             className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg hover:scale-[1.01] transition duration-200"
//           >
//             <h2 className="text-lg font-semibold">{note.title}</h2>
//             <p className="text-sm text-gray-300">{note.message}</p>
//             <p className="text-xs text-gray-500 mt-1">{note.time}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notification;

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Sample notifications array
const notifications = [
  "New file uploaded: file1.txt",
  "File sharing with John completed.",
  "Your file has been downloaded by Alice.",
  "System maintenance scheduled for tomorrow.",
  "New update available for the app.",
  "Your upload failed due to network issues.",
  "New file uploaded: file1.txt",
  "File sharing with John completed.",
  "Your file has been downloaded by Alice.",
  "System maintenance scheduled for tomorrow.",
  "New update available for the app.",
  "Your upload failed due to network issues.",
  "New file uploaded: file1.txt",
  "File sharing with John completed.",
  "Your file has been downloaded by Alice.",
  "System maintenance scheduled for tomorrow.",
  "New update available for the app.",
  "Your upload failed due to network issues.",
  "New file uploaded: file1.txt",
  "File sharing with John completed.",
  "Your file has been downloaded by Alice.",
  "System maintenance scheduled for tomorrow.",
  "New update available for the app.",
  "Your upload failed due to network issues.",
  "New file uploaded: file1.txt",
  "File sharing with John completed.",
  "Your file has been downloaded by Alice.",
  "System maintenance scheduled for tomorrow.",
  "New update available for the app.",
  "Your upload failed due to network issues.",
];

const NotificationPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Automatically scroll the notification container
    const scrollInterval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollTop += 50; // Adjust this value to control speed
      }
    }, 2000); // Adjust time interval to control how fast the notifications scroll

    // Clean up the interval when the component is unmounted
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="w-3/4 h-3/4 max-w-2xl bg-opacity-80 bg-black p-4 rounded-lg overflow-hidden">
        <div className="text-xl font-semibold mb-4">Notifications</div>
        <motion.div
          ref={containerRef}
          className="overflow-y-auto h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {notifications.map((notification, index) => (
            <motion.div
              key={index}
              className="mb-4 p-2 border-b border-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.5, duration: 1 }}
            >
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 bg-blue-500 rounded-full flex justify-center items-center text-white">
                  <span>🔔</span>
                </div>
                <div>{notification}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationPage;
