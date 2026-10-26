import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
const Decorations = () => {
  const MotionBox = motion.create(Box);
  return (
    <>
      <MotionBox
        animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,217,226,0.4) 100%)",
          backdropFilter: "blur(20px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <MotionBox
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%",
          background: "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(15px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default Decorations;
