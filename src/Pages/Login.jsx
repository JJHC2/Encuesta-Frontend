import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/image/logo.png";
import { toast, ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Usar variable de entrono

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
  
    try {
      const body = { email, password };
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      const parseRes = await response.json();
  
      if (response.status === 401) {
        toast.error(parseRes);
        return;
      }
  
      
      localStorage.setItem("token", parseRes.token);
      localStorage.setItem("role", parseInt(parseRes.role, 10)); 
      setAuth(true, parseInt(parseRes.role, 10)); 
    } catch (err) {
      console.error("Hubo un error", err);
      toast.error("Error de registro, intenta nuevamente.");
    }
  };
  

  React.useEffect(() => {
    document.body.classList.add("login-body");
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  return (
    <Fragment>
      <ToastContainer transition={Flip} />
      <div className="screen-1">
        <img src={logo} className="logo" alt="logo" />
        <form onSubmit={onSubmitForm}>
          <div className="email">
            <label htmlFor="email">Email Address</label>
            <div className="sec-2">
              <i className="fa-regular fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Username@gmail.com"
                value={email}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <div className="sec-2">
              <i className="fa-solid fa-lock"></i>
              <input
                className="pas"
                type="password"
                name="password"
                placeholder="············"
                value={password}
                onChange={onChange}
              />
            </div>
          </div>
          <button type="submit" className="login">Login</button>
          <div className="footer">
            <Link className="footer" to="/register">Registrarse</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
