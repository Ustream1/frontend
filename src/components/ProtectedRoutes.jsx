import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useAccount } from "wagmi";

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth();

  console.log(authenticated);
  const { isConnected, address, connector } = useAccount();

  if (!isConnected) {
    return <Navigate to="/sign_in" replace />;
  }

  return children;
};

export default ProtectedRoute;
