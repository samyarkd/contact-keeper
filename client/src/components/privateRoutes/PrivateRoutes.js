import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
function PrivateRoute() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading_state } = authContext;

  return !isAuthenticated && !loading_state ? (
    <Navigate replace to='/login' />
  ) : (
    <Outlet />
  );
}

export default PrivateRoute;
