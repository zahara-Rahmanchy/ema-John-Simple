import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import cartProductLoader from "./components/Loaders/cartProductLoader";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
import AuthProviders from "./Providers/AuthProviders";
import AuthProvider from "./Providers/AuthProviders";
import PrivateRoutes from "./routers/PrivateRoute";

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
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoutes>
            <Inventory></Inventory>
          </PrivateRoutes>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
