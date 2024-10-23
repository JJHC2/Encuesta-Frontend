import React from "react";
import fondo from "../../assets/image/fondo.jpg";
const EncuestaImage = () => {
  const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "600px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    caption: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
      textAlign: "center",
      padding: "20px",
    },
    title: {
      fontSize: "3rem",
      marginBottom: "20px",
      color: "white",
    },
    paragraph: {
      fontSize: "1.25rem",
      marginBottom: "30px",
    },
    button: {
      marginRight: "10px",
    },
  };
  return (
    <div>
    <div style={styles.container}>
      <img src={fondo} alt="Header" style={styles.image} />
      <div style={styles.caption}>
        <p style={styles.paragraph}>¡Bienvenido/a! 🎓</p>
        <p style={styles.paragraph}>
          Nos alegra que estés aquí. Tu opinión es fundamental para ayudarnos a
          mejorar nuestros servicios y oportunidades para futuros egresados.
        </p>
        <p style={styles.paragraph}>
          Al compartir tus experiencias, estás contribuyendo a construir un mejor
          futuro para la comunidad universitaria. ¡Tu participación hace la
          diferencia!
        </p>
        <p style={styles.paragraph}>
          Por favor, toma unos minutos para completar la encuesta a continuación.
          Agradecemos sinceramente tu tiempo y dedicación. 🙌
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default EncuestaImage;
