// StatsCards.js
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const StatsCards = ({ jobData, encuesta, users, role, response }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            backgroundColor: "#3498db",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Encuestas Realizadas
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {encuesta}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {role === 1 ? (
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "#2ecc71",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Usuarios Registrados
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {users.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
      {/*CARD DE TRABAJANDO Y NO TRABAJANDO */}
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            backgroundColor: "green",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Alumnos con Trabajo
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {jobData.yes}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {role === 1 || role === 3 ? (
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              backgroundColor: "purple",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Respuestas Recibidas
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                {response}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : null}
      {/*ALUMNOS SIN TRABAJO */}
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            backgroundColor: "red",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Alumnos sin Trabajo
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              {jobData.no}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatsCards;
