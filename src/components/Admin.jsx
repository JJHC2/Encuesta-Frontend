import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const Admin = ({ setAuth }) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState(null);
  const [users, setUsers] = React.useState([]);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  React.useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/admin`, {
          method: "GET",
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setName(parseRes.user_name);
        setRole(parseRes.role_id);

        if (parseRes.role_id === 1) {
          const usersResponse = await axios.get(`${BACKEND_URL}/admin/users`, {
            headers: { token: localStorage.token },
          });
          setUsers(usersResponse.data);
        }
      } catch (err) {
        console.error("Error", err.message);
      }
    };

    fetchAdminData();
  }, []);

  const linkStyle = {
    color: "#ecf0f1",
    textDecoration: "none",
    display: "block",
    padding: "10px 0",
    fontSize: "1.1em",
    marginBottom: "10px",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.5em" }}>Panel de Administración</h1>
        <button
          onClick={logout}
          style={{
            backgroundColor: "#d9534f",
            color: "#fff",
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
            marginTop: "10px",
          }}
        >
          Salir
        </button>
      </header>

      <div style={{ display: "flex", flex: "1" }}>
        <aside style={{
            width: "250px",
            backgroundColor: "#2c3e50",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1000,
            overflowY: "auto",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Menú</h2>
          <nav>
            <Link to="/admin" style={linkStyle}>Inicio</Link>
            {role === 1 && (
              <Link to="/gestion" style={linkStyle}>Gestión de Usuarios</Link>
            )}
            <Link to="/admin" style={linkStyle}>Generar Reporte</Link>
            <Link to="/admin" style={linkStyle}>Gestionar Encuestas</Link>
          </nav>
        </aside>

        <main style={{ flex: 1, marginLeft: "250px", padding: "20px" }}>
          
        </main>
      </div>

      <footer style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px 20px",
          textAlign: "center",
          position: "relative",
          bottom: 0,
          width: "100%",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Panel de Administración. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Admin;
