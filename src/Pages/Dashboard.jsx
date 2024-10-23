import React, { Fragment, useState, useEffect } from "react";
import Header from "./Layouts/Header";
import Content from "./Layouts/Content";
import Footer from "./Layouts/Footer";
import { Flip,ToastContainer } from "react-toastify";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  
  async function getName() {
    try {
      const response = await fetch(`${BACKEND_URL}/dashboard`, {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      
      if (response.status === 401) {
        setAuth(false); 
        return;
      }
      setName(parseRes.user_name); 
    } catch (err) {
      console.error("Error", err.message);
    }
  }

  const logout =() =>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuth(false);
  }  

  

  

  useEffect(() => {
    getName();
  }, []);

  return (
    <Fragment>
      <Header logout={logout} />
      <ToastContainer transition={Flip}/>
      <Content name={name}/>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
