import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e91e63", // Tono rosa principal
      light: "#FFD9E2", // Tono rosa suave de acento
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafafa", // Fondo claro de la aplicación
      paper: "#ffffff", // Fondo para Cards y Modales
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
