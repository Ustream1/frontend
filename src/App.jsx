import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyAddress from "./pages/VerifyAddress";
import WelcomeBack from "./pages/WelcomeBack";
import Category from "./pages/Category";
import Layout from "./Layout";
import ProtectedRoute from "./components/ProtectedRoutes";
import ForgotPassword from "./pages/ForgotPassword";
import VerificationCode from "./pages/VerificationCode";
import Homepage from "./pages/Homepage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
        <Route path="/address_verification" element={<VerifyAddress />} />
        <Route path="/sign_in" element={<WelcomeBack />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/app/*" element={<Layout />} />
        <Route
          path="/verification_code"
          element={
            <ProtectedRoute>
              <VerificationCode />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
