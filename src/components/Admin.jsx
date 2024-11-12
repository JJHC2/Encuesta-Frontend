import React from "react";
import axios from "axios";
import DashboardAdmin from "./templates/DashboardAdmin";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const Admin = ({ setAuth }) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState(null);
  const [users, setUsers] = React.useState([]);
  const [encuesta, setEncuesta] = React.useState([]);
  const [jobData, setJobData] = React.useState({ yes: 0, no: 0 });
  const [response, setResponse] = React.useState([]);
  const [seccionData, setSeccionData] = React.useState([]);
  const [academicData, setAcademicData] = React.useState([]);
  
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

        // Verificar si el token ha expirado
        if (response.status === 401 && parseRes.message === "Unauthorized") {
          alert("La sesión ha expirado. Por favor, vuelve a iniciar sesión.");
          localStorage.removeItem("token"); 
          window.location.href = "/"; 
          return; 
        }

        setName(parseRes.user_name);
        setRole(parseRes.role_id);

        // Obtener datos según el rol
        if (parseRes.role_id === 1 || parseRes.role_id === 3) {
          const usersResponse = await axios.get(`${BACKEND_URL}/admin/users`, {
            headers: { token: localStorage.token },
          });
          setUsers(usersResponse.data);
        }

        if (parseRes.role_id === 1 || parseRes.role_id === 3 || parseRes.role_id === 4) {
          const getCountJob = await axios.get(`${BACKEND_URL}/admin/countjob`, {
            headers: { token: localStorage.token },
          });
          setEncuesta(getCountJob.data[0].count);
        }

        // Obtener el conteo de respuestas
        if (parseRes.role_id === 1 || parseRes.role_id === 3) {
          const getCountResponse = await axios.get(
            `${BACKEND_URL}/admin/countresponses`,
            {
              headers: { token: localStorage.token },
            }
          );
          const count = parseInt(getCountResponse.data[0].count, 10);
          setResponse(count);
        }

        // Obtener datos del trabajo
        const jobDataResponse = await axios.get(
          `${BACKEND_URL}/admin/jobdata`,
          {
            headers: { token: localStorage.token },
          }
        );
        setJobData(jobDataResponse.data);

        // Obtener datos de la sección
        const SeccionData = await axios.get(
          `${BACKEND_URL}/admin/countresponsebysection`,
          {
            headers: { token: localStorage.token },
          }
        );
        setSeccionData(SeccionData.data);

        // Obtener datos académicos
        const academicDataResponse = await axios.get(
          `${BACKEND_URL}/admin/academica`,
          {
            headers: { token: localStorage.token },
          }
        );
        setAcademicData(academicDataResponse.data);
      } catch (err) {
        console.error("Error", err.message);
        if (err.response && err.response.status === 401) {
          // Verificar si el token ha expirado
          alert("La sesión ha expirado. Por favor, vuelve a iniciar sesión.");
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }
    };

    fetchAdminData(); 

  }, []); 

  return (
    <DashboardAdmin
      encuesta={encuesta}
      jobData={jobData}
      seccionData={seccionData}
      users={users}
      name={name}
      role={role}
      response={response}
      logout={logout}
      academicData={academicData}
    />
  );
};

export default Admin;
