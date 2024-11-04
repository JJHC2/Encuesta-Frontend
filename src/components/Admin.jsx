import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Admin.css";
import JobCharts from "../libs/JobCharts";
import generatePDF from "../libs/PDF/generatePDF";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const Admin = ({ setAuth }) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [sidebarVisible, setSidebarVisible] = React.useState(true);
  const [encuesta, setEncuesta] = React.useState([]);
  const [jobData, setJobData] = React.useState({ yes: 0, no: 0 });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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

        if (parseRes.role_id === 1 || parseRes.role_id === 2) {
          const getCountJob = await axios.get(`${BACKEND_URL}/admin/countjob`, {
            headers: { token: localStorage.token },
          });
          setEncuesta(getCountJob.data[0].count);
        }

        const jobDataResponse = await axios.get(
          `${BACKEND_URL}/admin/jobdata`,
          {
            headers: { token: localStorage.token },
          }
        );
        setJobData(jobDataResponse.data);
      } catch (err) {
        console.error("Error", err.message);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center py-3 border-bottom">
        <button
          className="btn btn-primary"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          &#9776; Menú
        </button>
        <h1>Panel de Administración</h1>
        <div className="d-flex align-items-center">
          <img
            src="profile.png"
            alt="Perfil"
            className="rounded-circle"
            width="40"
          />
          <button onClick={logout} className="btn btn-danger ms-3">
            Salir
          </button>
        </div>
      </header>

      <div className="row">
        <aside
          className={`col-md-3 bg-light p-4 ${sidebarVisible ? "" : "d-none"}`}
        >
          <h2>Menú</h2>
          <nav className="nav flex-column">
            <Link className="nav-link" to="/admin">
              Inicio
            </Link>
            {role === 1 && (
              <Link className="nav-link" to="/gestion">
                Gestión de Usuarios
              </Link>
            )}
            <Link className="nav-link" to="/admin">
              Gestionar Encuestas
            </Link>
            <Link className="nav-link" to="/home">
              Gestionar Preguntas
            </Link>
          </nav>
        </aside>

        <main className="col-md-9">
          <div className="row my-4">
            <div className="col-md-6">
              <div className="card bg-info text-white text-center">
                <div className="card-body">
                  <h5 className="card-title">Alumnos Con Trabajo</h5>
                  <p className="card-text fs-3">{encuesta}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-success text-white text-center">
                <div className="card-body">
                  <h5 className="card-title">Total de Usuarios</h5>
                  <p className="card-text fs-3">{users.length}</p>
                </div>
              </div>
            </div>
          </div>

          <h1>Estadisticas</h1>
          <div className="row my-4">
            <div className="col-md-12">
              <div className="card-body">
                <button onClick={generatePDF} className="btn btn-primary mt-3">
                  <i class="fa-solid fa-file"></i>
                </button>
                <div id="pdf-content">
                  <JobCharts jobData={jobData} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="text-center py-4 mt-auto border-top">
        <p>
          &copy; {new Date().getFullYear()} Panel de Administración. Todos los
          derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Admin;
