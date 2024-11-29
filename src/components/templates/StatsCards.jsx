import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Custom styling for the typography
const CustomTypography = styled(Typography)({
  fontFamily: "'Arial', sans-serif", // Cambié la fuente a Arial
  display: 'inline-block',
  verticalAlign: 'middle',
  marginLeft: '10px', // Espacio entre el ícono y el texto
});

const StatsCards = ({ jobData, encuesta, users, role, response }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  console.log(hoveredCard)
  const commonBackgroundColor = "#ffffff"; 
  const borderColor = "#4caf50"; 
  const textColor = "#4caf50"; 

  return (
    <Grid container spacing={3}>
      {['Encuestas', 'Usuarios', 'Trabajando', 'Respuestas', 'Sin Trabajo'].map((title, index) => {
        let cardContent = null;
        let icon = null;
        let link = "#"; 

        switch (title) {
          case 'Encuestas':
            icon = <i className="fa fa-poll fa-2x"></i>; 
            cardContent = (
              <>
                <CustomTypography variant="h6" gutterBottom>
                  Total Encuestas Realizadas
                </CustomTypography>
                <CustomTypography variant="h5" fontWeight="bold">
                  {encuesta}
                </CustomTypography>
              </>
            );
            link = "/admin";
            break;
          case 'Usuarios':
            if (role === 1) {
              icon = <i className="fa fa-users fa-2x"></i>;
              cardContent = (
                <>
                  <CustomTypography variant="h6" gutterBottom>
                    Total Usuarios Registrados
                  </CustomTypography>
                  <CustomTypography variant="h5" fontWeight="bold">
                    {users.length}
                  </CustomTypography>
                </>
              );
              link = "/gestion"; 
            }
            break;
          case 'Trabajando':
            icon = <i className="fa fa-briefcase fa-2x"></i>; 
            cardContent = (
              <>
                <CustomTypography variant="h6" gutterBottom>
                  Alumnos con Trabajo
                </CustomTypography>
                <CustomTypography variant="h5" fontWeight="bold">
                  {jobData.yes}
                </CustomTypography>
              </>
            );
            link = "/admin"; 
            break;
          case 'Respuestas':
            if (role === 1 || role === 3) {
              icon = <i className="fa fa-clipboard-list fa-2x"></i>; 
              cardContent = (
                <>
                  <CustomTypography variant="h6" gutterBottom>
                    Total Respuestas Recibidas
                  </CustomTypography>
                  <CustomTypography variant="h5" fontWeight="bold">
                    {response}
                  </CustomTypography>
                </>
              );
              link = "/encuesta"; 
            }
            break;
          case 'Sin Trabajo':
            icon = <i className="fa fa-user-times fa-2x"></i>; 
            cardContent = (
              <>
                <CustomTypography variant="h6" gutterBottom>
                  Alumnos sin Trabajo
                </CustomTypography>
                <CustomTypography variant="h5" fontWeight="bold">
                  {jobData.no}
                </CustomTypography>
              </>
            );
            link = "/admin";
            break;
          default:
            return null;
        }

        if (cardContent) {
          return (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Card
                sx={{
                  backgroundColor: commonBackgroundColor, 
                  border: `2px solid ${borderColor}`, 
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.05)',
                    borderColor: borderColor,
                  },
                }}
                onMouseEnter={() => setHoveredCard(title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                  <a href={link} style={{ color: textColor, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    {icon}
                    {cardContent}
                  </a>
                </CardContent>
              </Card>
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default StatsCards;
