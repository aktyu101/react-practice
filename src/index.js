import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //1
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Test from "./pages/practice-00/Test";
import Test01 from "./pages/practice-00/Test01";
import BoxColor from "./pages/practice-01/BoxColor";
import Input from "./pages/practice-02/Input";
import List from "./pages/practice-03/List";
import Chat from "./pages/practice-04/Chat";
import Counter from "./pages/practice-04/Counter";
import styled from "@emotion/styled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/test",
        element: <Test />,
        children: [
          {
            path: ":test01",
            element: <Test01 />,
          },
        ],
      },
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
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
  // { path: "box-color", element: <BoxColor /> },
  // {
  //   path: "input",
  //   element: <Input />,
  // },
]); //2

const StudyList = styled.li`
  border: solid 1px #eee;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 25px;
`;

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
