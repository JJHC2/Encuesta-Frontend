import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Navigation = ({ seccionActual, totalSecciones, onPrevious, onNext, onSubmit }) => {
  return (
    <Grid container spacing={2} sx={{ py: 3, mt: 3, textAlign: 'center' }}>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" color="textSecondary">
          Página: {seccionActual} de {totalSecciones}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        {seccionActual > 1 && (
          <Button
            variant="outlined"
            onClick={onPrevious}
            sx={{ mr: 2 }}
          >
            Atrás
          </Button>
        )}
        {seccionActual < totalSecciones ? (
          <Button variant="contained" color="primary" onClick={onNext}>
            Siguiente
          </Button>
        ) : (
          <Button variant="contained" color="success" onClick={onSubmit}>
            Enviar
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Navigation;
