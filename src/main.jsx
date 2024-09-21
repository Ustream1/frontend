import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AuthProvider } from "./contexts/AuthContext.jsx";

import { HashRouter as Router } from "react-router-dom";
import { Providers } from "./provider/index.jsx";
import "@rainbow-me/rainbowkit/styles.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Providers>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Providers>
    </Router>
  </React.StrictMode>
);
