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
import Admin from "./components/Admin";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import GestionUsuarios from "./components/Admin/GestionUsuarios";
import RequestPasswordReset from "./Pages/Auth/RequestPasswordReset";
import ResetPassword from "./Pages/Auth/ResetPassword";
import EncuestaForm from "./EncuestaMain/EncuestaForm";
import JobOferts from "./components/JobsOferts/JobOferts";
import './App.css';
function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

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
        <Route path="/forgot-password" element={<RequestPasswordReset />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />


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
              <EncuestaForm setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
        path="/oferts-job"
        element={
          isAuthenticated && role === 2 ? (
            <JobOferts/>
          ) : (
            <Navigate to="/" />
          )
        }/>

        {/*RUTAS DE ADMIN */}
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

      

        <Route
          path="/gestion"
          element={
            isAuthenticated && role === 1 ? (
              <GestionUsuarios setAuth={setAuth} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin/add"
          element={
            isAuthenticated && role === 1 ? <AddUser /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/edit/:id"
          element={
            isAuthenticated && role === 1 ? <EditUser /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/view/:id"
          element={
            isAuthenticated && role === 1 ? <ViewUser /> : <Navigate to="/" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
