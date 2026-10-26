import Typography from "@mui/material/Typography";
import React from "react";

const TitlesHome = () => {
  return (
    <>
      <Typography
        variant='h3'
        component='h1'
        align='center'
        sx={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 700,
          fontStyle: "fantasy",
          color: "#2d3748",
          mb: 1.5,
          fontSize: { xs: "2rem", md: "3.2rem" },
        }}
      >
        Tu belleza, a tu manera.
      </Typography>

      <Typography
        variant='h6'
        align='center'
        sx={{
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: 400,
          color: "#64748b",
          mb: 5,
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        Encuentra los mejores salones de la ciudad o recibe atención experta
        directamente en tu hogar.
      </Typography>
    </>
  );
};

export default TitlesHome;
