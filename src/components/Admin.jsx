import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Styles/Admin.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const Admin = ({ setAuth }) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [sidebarVisible, setSidebarVisible] = React.useState(true);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth(false);
  };

  React.useEffect(() => {
    /**
     * Función asíncrona para obtener datos del administrador.
     * Realiza una solicitud GET al endpoint de administrador y establece el nombre y rol del usuario.
     * Si el rol del usuario es 1 (administrador), también obtiene la lista de usuarios.
     * 
     * @async
     * @function fetchAdminData
     * @returns {Promise<void>} No retorna ningún valor.
     * @throws {Error} Muestra un mensaje de error en la consola si la solicitud falla.
     */
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


  return (
    <div className="admin-container">
      <header className="admin-header">
        <button
          className="menu-toggle"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          &#9776;
        </button>
        <h1>Panel de Administración</h1>
        <div className="header-actions">
          <input type="text" placeholder="Buscar usuarios..." className="search-input" />
          <img src="profile.png" alt="Perfil" className="profile-img" />
          <button type="submit" onClick={logout} className="logout-button">Salir</button>
        </div>
      </header>

      <aside className={`admin-sidebar ${sidebarVisible ? "visible" : ""}`}>
        <h2>Menú</h2>
        <nav>
          <Link to="/admin">Inicio</Link>
          {role === 1 && <Link to="/gestion">Gestión de Usuarios</Link>}
          <Link to="/reportes">Generar Reporte</Link>
          <Link to="/admin">Gestionar Encuestas</Link>
          <Link to="/home">Gestionar Preguntas</Link>
        </nav>
      </aside>

      <main className="admin-main">
        <div className="admin-cards">
          <div className="card">
            <p>Encuestas Realizadas</p>
            <p></p>
          </div>
          <div className="card">
            <p>Total de Usuarios</p>
            <p>{users.length}</p>
          </div>
        </div>
        <h1>Graficas</h1>
      </main>

      <footer className="admin-footer">
        <p>&copy; {new Date().getFullYear()} Panel de Administración. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Admin;
