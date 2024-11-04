import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    matricula: "",
  });

  const { email, name, password, matricula } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, name, password, matricula, role_id: 2 };
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (response.status === 401) {
        console.error(parseRes.message);
        alert(parseRes.message);
        return;
      }

      localStorage.setItem("token", parseRes.token);
      setAuth(true, parseRes.role);
    } catch (err) {
      console.error("Hubo un error", err);
      alert("Error de registro, intenta nuevamente.");
    }
  };

  React.useEffect(() => {
    document.body.classList.add("register-body");
    return () => {
      document.body.classList.remove("register-body");
    };
  }, []);

  // Animación para mover las figuras aleatoriamente
  React.useEffect(() => {
    const circles = document.querySelectorAll(".circle");
    const moveCircles = () => {
      circles.forEach(circle => {
        const randomX = Math.floor(Math.random() * 10);
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
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-sm"

        >
          <div className="card-body">
            <h1 className="">Registro</h1>
            <form onSubmit={onSubmitForm}>
              <div className="inputGroupReg">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={onChange}
                />


              </div>
              <br />
              <div className="inputGroupReg">
                <input
                  type="text"

                  name="name"
                  placeholder="name"
                  value={name}
                  onChange={onChange}
                />

              </div>
              <br />
              <div className="inputGroupReg">

                <input
                  type="password"

                  name="password"
                  id="exampleFormControlInput3"
                  placeholder="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className="inputGroupReg">

                <input
                  type="number"

                  name="matricula"
                  id="exampleFormControlInput4"
                  placeholder="matricula"
                  value={matricula}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="buttonRegistro">Registrarse</button>
            </form>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
