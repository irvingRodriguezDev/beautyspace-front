import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const UserLocationMarker = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Onda expansiva animada */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          width: 32,
          height: 32,
          borderRadius: "50%",
          bgcolor: "rgba(233, 30, 99, 0.35)",
        }}
      />
      {/* Punto central sólido */}
      <Box
        sx={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          bgcolor: "#e91e63",
          border: "3px solid #ffffff",
          boxShadow: "0 0 10px rgba(233, 30, 99, 0.5)",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default UserLocationMarker;
