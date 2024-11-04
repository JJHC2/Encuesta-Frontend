import React, { Fragment, useEffect } from "react";
import {Link} from "react-router-dom";

const Dashboard = ({ setAuth }) => {
 
  const logout =() =>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth(false);
  }  

  
  return (
    <Fragment>
      <h1>Esta es la pantalla principal de user</h1>

      {/*AQUI ESTAN LOS ENLACES PARA LAS DIFERENTES SECCIONES */}
      <Link to="/encuesta">Encuesta</Link>


      <button onClick={e => logout()}>Logout</button>
    </Fragment>
  );
};

export default Dashboard;
