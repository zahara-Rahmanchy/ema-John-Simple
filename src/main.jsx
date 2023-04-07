import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import cartProductLoader from "./components/Loaders/cartProductLoader";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },

      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductLoader,
      },

      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
