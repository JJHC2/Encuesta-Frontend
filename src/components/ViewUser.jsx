import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

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
    <div className="flex">
      <div className="sidebar bg-gray-800 text-white p-5 md:w-1/4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Panel de Administración</h2>
        <Link
          className="btn btn-danger w-full text-center py-2 rounded-md hover:bg-red-600 transition duration-300"
          to="/gestion"
        >
          Regresar
        </Link>
      </div>

      <div className="content flex-1 p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Detalles del Usuario</h1>
        
        <div className="overflow-x-auto mt-5">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-300">
              <tr>
                <th className="py-3 px-6 text-left text-gray-700">Usuario</th>
                <th className="py-3 px-6 text-left text-gray-700">Email</th>
                <th className="py-3 px-6 text-left text-gray-700">Matrícula</th>
                <th className="py-3 px-6 text-left text-gray-700">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100 transition duration-300">
                <td className="py-4 px-6">{data.user_name}</td>
                <td className="py-4 px-6">{data.user_email}</td>
                <td className="py-4 px-6">{data.user_matricula}</td>
                <td className="py-4 px-6">{data.role_name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
