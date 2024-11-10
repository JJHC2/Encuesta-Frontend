import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  Avatar,
  FormHelperText,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    profile_picture: "",
    bio: "",
    phone_number: "",
    address: "",
    birth_date: "",
    job_position: "",
    status: "activo",
  });

  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // Para mostrar la imagen seleccionada

  const fileInputRef = useRef(null); // Referencia al input file

  useEffect(() => {
    // Asegúrate de que el token esté disponible
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No se encontró el token de autenticación.");
      toast.error("No se encontró el token de autenticación.");
      return;
    }

    axios
      .get("http://localhost:5000/profile", { headers: { token } })
      .then((res) => {
        setProfile(res.data);

        // Inicializar formData con los valores actuales del perfil
        setFormData({
          profile_picture: res.data.profile_picture || "",
          bio: res.data.bio || "",
          phone_number: res.data.phone_number || "",
          address: res.data.address || "",
          birth_date: res.data.birth_date || "",
          job_position: res.data.job_position || "",
          status: res.data.status || "activo",
        });
      })
      .catch((err) => {
        setError("Error al obtener perfil");
        toast.error("Error al obtener perfil");
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "profile_picture") {
      const file = e.target.files[0];
      if (file && !file.type.startsWith("image/")) {
        setError("El archivo debe ser una imagen.");
        toast.error("El archivo debe ser una imagen.");
        return;
      }
      setFormData({
        ...formData,
        profile_picture: file,
      });
      setImagePreview(URL.createObjectURL(file));
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crea una instancia de FormData
    const formDataToSend = new FormData();

    // Agrega cada campo al FormData solo si no está vacío
    for (const key in formData) {
      if (
        formData[key] !== "" &&
        formData[key] !== null &&
        formData[key] !== undefined
      ) {
        formDataToSend.append(key, formData[key]);
      }
    }

    // Asegúrate de que la imagen esté en el FormData solo si fue seleccionada
    if (formData.profile_picture instanceof File) {
      formDataToSend.append("profile_picture", formData.profile_picture);
    }

    // Asegúrate de que hay al menos un campo que no está vacío antes de enviar
    if (formDataToSend.entries().next().done) {
      setError("Debe proporcionar al menos un campo para actualizar.");
      toast.error("Debe proporcionar al menos un campo para actualizar.");
      return;
    }

    axios
      .put("http://localhost:5000/profile/profile-update", formDataToSend, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data);
        setError(""); // Limpiar errores
        toast.success("Perfil actualizado exitosamente");
      })
      .catch((err) => {
        setError("Error al actualizar perfil");
        console.error("Error:", err.response ? err.response.data : err);
        toast.error("Error al actualizar perfil");
      });
  };

  return (
    <Container maxWidth="sm">
      {profile ? (
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h4" align="center">
            Perfil de {profile.user_name}
          </Typography>

          {/* Mostrar la imagen de perfil */}
          <Avatar
            alt="Profile Picture"
            src={imagePreview || profile.profile_picture || "default.jpg"}
            sx={{ width: 100, height: 100, margin: "20px auto" }}
          />

          <form onSubmit={handleSubmit}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => fileInputRef.current.click()} // Disparar click usando ref
              style={{ marginTop: 20 }}
            >
              Cambiar Imagen de Perfil
            </Button>

            {/* Input file escondido */}
            <input
              type="file"
              name="profile_picture"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleChange}
            />

            {/* Bio */}
            <TextField
              fullWidth
              margin="normal"
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              variant="outlined"
            />

            {/* Phone number */}
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              variant="outlined"
            />

            {/* Address */}
            <TextField
              fullWidth
              margin="normal"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
            />

            {/* Birth date */}
            <TextField
              fullWidth
              margin="normal"
              label="Birth Date"
              name="birth_date"
              type="date"
              value={formData.birth_date}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Job position */}
            <TextField
              fullWidth
              margin="normal"
              label="Job Position"
              name="job_position"
              value={formData.job_position}
              onChange={handleChange}
              variant="outlined"
            />

            {/* Status */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="activo">Activo</MenuItem>
                <MenuItem value="inactivo">Inactivo</MenuItem>
              </Select>
              <FormHelperText>{error && error}</FormHelperText>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Actualizar Perfil
            </Button>
          </form>
        </Paper>
      ) : (
        <Typography align="center" variant="h6">
          Cargando perfil...
        </Typography>
      )}

      {/* Toast Container for notifications */}
      <ToastContainer />
    </Container>
  );
};

export default Profile;
