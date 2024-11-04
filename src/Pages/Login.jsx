import React, { Fragment, useState, use } from "react";
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

  // Animación para mover las figuras aleatoriamente
  React.useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const moveCircles = () => {
      circles.forEach(circle => {
        const randomX = Math.floor(Math.random() * -10);
        const randomY = Math.floor(Math.random() * -50);
        circle.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
      });
    };

    const intervalId = setInterval(moveCircles, 1000); // Cambia de posición cada 3 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo cuando se desmonta
  }, []);

  return (
    


    <Fragment>
          <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>
      <ToastContainer transition={Flip} />
      <div className="screen-1">
        <img src={logo} className="logo" alt="logo" />
        <form onSubmit={onSubmitForm}>
        
        <div className="inputGroup">
              <input
                required
                type="email"
                name="email"                
                value={email}
                onChange={onChange}                
              />
              <label htmlFor="email">email</label>
        </div>
   
          <br />
          <div className="inputGroup">
              <input
              required
                className="pas"
                type="password"
                name="password"                
                value={password}
                onChange={onChange}
              />
             <label htmlFor="password">password</label>
        </div>
          
          <br />
          <button type="submit" className="button">Login</button>
          
          <div className="footer">
            
            <Link className="footer" to="/register">Registrarse</Link>
          </div>
        </form>
      </div>
      
    </Fragment>
    
  );
};

export default Login;
