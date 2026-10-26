import { useState } from "react";
import Box from "@mui/material/Box";
import Layout from "../../components/Layout/Layout";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { motion, AnimatePresence } from "framer-motion";
import Decorations from "../../components/Home/Decorations";
import BadgeUp from "../../components/Home/BadgeUp";
import TitlesHome from "../../components/Home/TitlesHome";
import OptionPresencial from "../../components/Home/OptionPresencial";
import OptionLocal from "../../components/Home/OptionLocal";

const Home = () => {
  const [selectedType, setSelectedType] = useState("presencial");

  return (
    <Layout>
      <Box
        sx={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 6 },
          py: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* --- FIGURAS ORGANICAS DE FONDO --- */}
        <Decorations />
        {/* --- CONTENIDO PRINCIPAL REESTRUCTURADO --- */}
        <Box sx={{ zIndex: 1, maxWidth: "1100px", width: "100%" }}>
          {/* Badge superior */}
          <BadgeUp />
          <TitlesHome />
          {/* TARJETAS HORIZONTALES / ASIMÉTRICAS */}
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: "center", alignItems: "stretch" }}
          >
            {/* Opción Presencial */}
            <OptionPresencial />
            {/* Opción A Domicilio */}
            <OptionLocal />
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
