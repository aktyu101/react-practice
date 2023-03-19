import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //1
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BoxColor from "./pages/practice-01/BoxColor";
import Input from "./pages/practice-02/Input";
import List from "./pages/practice-03/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/input",
        element: <Input />,
      },
      {
        path: "/boxcolor",
        element: <BoxColor />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
  // { path: "box-color", element: <BoxColor /> },
  // {
  //   path: "input",
  //   element: <Input />,
  // },
]); //2

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
); //3

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
