import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Movies from "./pages/Movies";
import ProtectedRoute from "./components/ProtectedRoutes";
import Earning from "./pages/Earning";
import TNCinema from "./pages/TNCinema";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import MovieStreams from "./pages/MovieStreams";

const Layout = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Routes>
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route
          path="/earnings"
          element={
            <ProtectedRoute>
              <Earning />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tn_cinema"
          element={
            <ProtectedRoute>
              <TNCinema />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stream"
          element={
            <ProtectedRoute>
              <MovieStreams />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Navigation />
    </div>
  );
};

export default Layout;
