import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const ViewUser = () => {
  const { id } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`${BACKEND_URL}/admin/users/${id}`, {
        headers: { token: localStorage.token },
      });
      setData(response.data);
    };
    fetchUser();
  }, [id]);

  return (
    <div className="d-flex flex-column flex-md-row">
      <div className="sidebar bg-dark text-white p-4 col-md-3 rounded shadow-lg">
        <h2 className="text-center h4 mb-4">Panel de Administración</h2>
        <Link className="btn btn-danger w-100 text-white" to="/gestion">
          Regresar
        </Link>
      </div>

      <div className="content flex-fill p-4">
        <h1 className="text-center text-secondary mb-4 h2">
          Detalles del Usuario
        </h1>

        <div className="table-responsive mt-4">
          <table className="table table-bordered table-hover bg-white shadow-sm rounded">
            <thead className="table-secondary">
              <tr>
                <th className="text-secondary">Usuario</th>
                <th className="text-secondary">Email</th>
                <th className="text-secondary">Matrícula</th>
                <th className="text-secondary">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.user_name}</td>
                <td>{data.user_email}</td>
                <td>{data.user_matricula}</td>
                <td>{data.role_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
