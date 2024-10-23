import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Admin from "./Pages/Admin";
import Encuesta from "./Pages/Encuesta";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    console.log("Token:", token);
    console.log("User Role:", userRole);

    if (token) {
      setAuthenticated(true);
      setRole(parseInt(userRole, 10));
    } else {
      setAuthenticated(false);
      setRole(null);
    }
  }, []);

  const setAuth = (authStatus, userRole) => {
    setAuthenticated(authStatus);
    setRole(userRole); 
  };

  const redirectTo = () => {
    if (role === 2) return "/dashboard";
    if (role === 1 || role === 3 || role === 4) return "/admin";
    return "/";
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate to={redirectTo()} />
            )
          }
        />

        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register setAuth={setAuth} />
            ) : (
              <Navigate to={redirectTo()} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            isAuthenticated && role === 2 ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/encuesta"
          element={
            isAuthenticated && role === 2 ? (
              <Encuesta setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            isAuthenticated && (role === 1 || role === 3 || role === 4) ? (
              <Admin setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
