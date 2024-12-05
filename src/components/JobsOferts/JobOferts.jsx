import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import JobCard from "./Components/JobCard";
import "./styles/JobOferts.css";
import { Typography, Button, Box } from "@mui/material";
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const JobOferts = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [currentJobs, setCurrentJobs] = useState([]);
  const navigate = useNavigate();
  const [respondido, setRespondido] = useState(false);

  useEffect(() => {
    const checkResponses = async () => {
      const res = await fetch(`${BACKEND_URL}/dashboard/encuesta/check`, {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (res.ok) {
        const data = await res.json();
        setRespondido(data.responded);
      }
    };

    checkResponses();
  }, []);

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

  if (respondido === true) {
    return (
      <div className="mainContainer">
        <div className="header">
          <h1 className="title">Trabajos Disponibles</h1>
          <p className="subtitle">
            Encuentra tu próximo empleo remoto en México
          </p>
          {/*BOTON REGRESAR AL DASHBOARD */}
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
  } else {
    return (
      <div className="container my-5">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minHeight: "100vh", 
            padding: "20px"
          }}
        >
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{
              width: "150px",
              height: "150px",
              color: "#2e7d32",
              marginBottom: "20px",
            }}
          >
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>

        
          <Typography
            variant="h4"
            sx={{
              color: "#2e7d32",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Para ver los trabajos disponibles responde la encuesta. ¡Gracias!
          </Typography>

        
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              px: 4,
              py: 1,
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Regresar
          </Button>
        </Box>
      </div>
    );
  }
};

export default JobOferts;
