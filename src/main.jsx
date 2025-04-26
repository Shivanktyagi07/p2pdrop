import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Files from "./components/Files.jsx";
import Share from "./components/Share.jsx";
import Layout from "./components/Layout.jsx";
import Notification from "./components/Notification.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/share",
        element: <Share />,
      },
      {
        path: "/notifications", //
        element: <Notification />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
