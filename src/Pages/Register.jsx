import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


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

  return (
    <Fragment>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-sm"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="card-body">
            <h1 className="text-center my-4">Registro</h1>
            <form onSubmit={onSubmitForm}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="exampleFormControlInput2"
                  placeholder="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  Matricula
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="matricula"
                  id="exampleFormControlInput4"
                  placeholder="Matricula"
                  value={matricula}
                  onChange={onChange}
                />
              </div>
             <button type="submit">Registarse</button>
            </form>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
