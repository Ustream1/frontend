// AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { useAccount } from "wagmi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const { isConnected, address, connector } = useAccount();
  const checkToken = () => {
    // const token = localStorage.getItem("token");
    if (isConnected) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    checkToken();
  };

  useEffect(() => {
    checkToken();
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
