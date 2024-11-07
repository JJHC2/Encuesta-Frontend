import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img 
          src={job.companyLogo || 'https://via.placeholder.com/150'} 
          alt={job.companyName || "Logo de empresa"} 
          style={styles.logo}
        />
        <h2 style={styles.title}>{job.jobTitle || "Título no disponible"}</h2>
      </div>
      <p><strong>Ubicación:</strong> {job.jobGeo || "Ubicación no especificada"}</p>
      <p><strong>Empresa:</strong> {job.companyName || "Empresa no especificada"}</p>
      <p><strong>Tipo de empleo:</strong> {job.jobType || "Tipo no especificado"}</p>
      <p><strong>Descripción:</strong> {job.jobExcerpt || "Descripción no disponible"}</p>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.applyLink}
      >
        Ver oferta
      </a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'left',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  applyLink: {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '12px',
    display: 'inline-block',
    padding: '10px 15px',
    border: '2px solid #007BFF',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  applyLinkHover: {
    backgroundColor: '#007BFF',
    color: '#fff',
  },
};

export default JobCard;
