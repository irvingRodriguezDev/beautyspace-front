import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e91e63",
      light: "#FFD9E2",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
    text: {
      primary: "#2d3748",
      secondary: "#718096",
    },
  },
  typography: {
    // Fuente por defecto para cuerpo y textos generales
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

    // Títulos elegantes
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },

    // Subtítulos y encabezados de tarjetas
    h4: { fontFamily: '"Montserrat", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Montserrat", sans-serif', fontWeight: 600 },

    // Botones y subtítulos secundarios
    subtitle1: { fontFamily: '"Montserrat", sans-serif' },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export default theme;
