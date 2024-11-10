import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JobCard from "./Components/JobCard";
import "./styles/JobOferts.css";
const JobOferts = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [currentJobs, setCurrentJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = () => {
    setLoading(true);
    const url = `https://jobicy.com/api/v2/remote-jobs?count=50&geo=mexico`;

    axios
      .get(url)
      .then((response) => {
        const results = response.data.jobs || [];
        setJobs(results);
        setTotalResults(results.length);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const resultsPerPage = 10;
    const startIndex = (page - 1) * resultsPerPage;
    const currentJobsPage = jobs.slice(startIndex, startIndex + resultsPerPage);
    setCurrentJobs(currentJobsPage);
  }, [page, jobs]);

  if (loading) {
    return (
      <div className="loadingContainer">
        <div className="spinner"></div>
        <p className="loadingText">Cargando ofertas de trabajo...</p>
      </div>
    );
  }

  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  return (
    <div className="mainContainer">
      <div className="header">
        <h1 className="title">Trabajos Disponibles</h1>
        <p className="subtitle">Encuentra tu próximo empleo remoto en México</p>
        {/*BOTON REGRSAR AL DASHBOARD */}
        <button
          onClick={() => {
            console.log("Redirigiendo al Dashboard...");
            navigate("/dashboard");
          }}
          className="btn btn-success"
        >
          Regresar
        </button>
      </div>
      <div className="container">
        {currentJobs.length > 0 ? (
          currentJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="pageButton"
        >
          Anterior
        </button>
        <span className="pageInfo">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="pageButton"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default JobOferts;