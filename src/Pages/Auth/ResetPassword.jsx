import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/reset-password",
        { newPassword, token }
      );
      toast.success("Contraseña restablecida con éxito");
      alert("Contraseña restablecida con éxito");
      navigate("/");
      console.log(response.data);
    } catch (error) {
      toast.error("No se puede restablecer la contraseña");
      console.error(error);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      padding: '20px',
    },
    formContainer: {
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      width: '400px',
    },
    formTitle: {
      textAlign: 'center',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    inputField: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '16px',
    },
    submitButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4a90e2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };
  
  return (
    <div style={styles.container}>
    <ToastContainer />
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Restablecer Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="newPassword" style={styles.label}>Nueva Contraseña:</label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            style={styles.inputField}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Restablecer Contraseña</button>
      </form>
    </div>
  </div>
  );
};

export default ResetPassword;
