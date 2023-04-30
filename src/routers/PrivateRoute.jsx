import React from "react";
import {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../Providers/AuthProviders";

const PrivateRoutes = ({children}) => {
  const location = useLocation();
  console.log(location);
  const {user, loading} = useContext(AuthContext);

  if (loading) {
    return <div>loading.....</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;
