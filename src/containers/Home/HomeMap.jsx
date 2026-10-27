import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { customMapStyle } from "../../theme/mapStyles";
import SearchBarHome from "../../components/Home/SearchBarHome";
import Chips from "../../components/Home/Chips";

// Coordenadas iniciales (Toluca)
const defaultCenter = { lat: 19.2826, lng: -99.6557 };

const HomeMap = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

  return (
    <APIProvider apiKey={apiKey}>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* ================= 1. GOOGLE MAPS A PANTALLA COMPLETA ================= */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Map
            defaultCenter={defaultCenter}
            defaultZoom={14}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            styles={customMapStyle}
            style={{ width: "100%", height: "100%" }}
          >
            <Marker position={defaultCenter} />
          </Map>
        </Box>

        {/* ================= 2. CONTENEDOR FLOTANTE SUPERIOR (GRID) ================= */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
            px: { xs: 2, md: 4 },
            pointerEvents: "none", // Permite hacer clic en el mapa a través del espacio vacío
          }}
        >
          <Grid container spacing={2} sx={{ alignItems: "center" }}>
            {/* HEADER: Logo (Izquierda) & Perfil (Derecha) */}
            <Grid
              size={6}
              sx={{ display: "flex", justifyContent: "flex-start" }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "inline-flex",
                  px: 3,
                  py: 1.5,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  pointerEvents: "auto",
                }}
              >
                <Typography
                  variant='h6'
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 700,
                    color: "#e91e63",
                    textDecoration: "none",
                    letterSpacing: "0.5px",
                    lineHeight: 1.2,
                  }}
                >
                  BeautySpace
                </Typography>
              </Paper>
            </Grid>

            <Grid size={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Paper
                elevation={3}
                sx={{
                  p: 0.5,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  pointerEvents: "auto",
                }}
              >
                <IconButton sx={{ p: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: "#FFD9E2",
                      color: "#e91e63",
                      width: 34,
                      height: 34,
                    }}
                  >
                    <PersonOutlinedIcon fontSize='small' />
                  </Avatar>
                </IconButton>
              </Paper>
            </Grid>

            {/* BUSCADOR FLOTANTE (Centrado) */}
            <Grid
              size={12}
              sx={{ mt: 1, justifyContent: "center", display: "flex" }}
            >
              <SearchBarHome />
            </Grid>

            {/* PÍLDORAS DE FILTRO (Centradas) */}
            <Grid size={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Chips
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </APIProvider>
  );
};

export default HomeMap;
