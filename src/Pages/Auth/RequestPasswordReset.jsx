import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/forgot-password",
        { user_email: email }
      );
      console.log(response.data);
      toast.success("Se ha enviado un correo para restablecer la contraseña");
    } catch (error) {
      toast.error("El usuario no existe");
      console.log("No se puede enviar el token", error);
      console.error(error);
    }
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    title: {
      marginBottom: "20px",
      color: "#333",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
    inputField: {
      width: "300px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
      marginBottom: "10px",
    },
    submitButton: {
      width: "300px",
      padding: "10px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      <h1 style={styles.title}>Solicitar cambio de contraseña</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.inputField} 
          required
        />
        <button type="submit" style={styles.submitButton}>
          Request Password Reset
        </button>
      </form>
    </div>
  );
};

export default RequestPasswordReset;
