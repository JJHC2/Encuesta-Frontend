import React, { Fragment, useState, useEffect } from "react";



const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const Admin = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(null);
  const [roleMessage, setRoleMessage] = useState(""); 

  async function getNameAdmin() {
    try {
      const response = await fetch(`${BACKEND_URL}/admin`, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      if (response.status === 401) {
        setAuth(false);
        return;
      }

      setName(parseRes.user_name);
      setRole(parseRes.role_id); 

      
      switch (parseRes.role_id) {
        case 1:
          setRoleMessage("¡Eres un Superusuario!");
          break;
        case 3:
          setRoleMessage("¡Eres un Administrador de Nivel 1!");
          break;
        case 4:
          setRoleMessage("¡Eres un Administrador de Nivel 2!");
          break;
        default:
          setRoleMessage("¡Rol desconocido!");
      }
    } catch (err) {
      console.error("Error", err.message);
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth(false);
  };

  useEffect(() => {
    getNameAdmin();
  }, []);

  return (
    <Fragment>
      <h1>Hola a Todos desde admin</h1>
    </Fragment>
  );
};

export default Admin;
