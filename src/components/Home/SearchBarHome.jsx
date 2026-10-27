import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
const SearchBarHome = () => {
  const MotionPaper = motion.create(Paper);
  return (
    <MotionPaper
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      elevation={4}
      sx={{
        width: { xs: "100%", sm: "450px" },
        p: "8px 16px",
        display: "flex",
        alignItems: "center",
        borderRadius: "30px",
        background: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.6)",
        pointerEvents: "auto",
      }}
    >
      <SearchIcon sx={{ color: "#718096", mr: 1 }} />
      <InputBase
        placeholder='Buscar estudios, manicura, pestañas...'
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.9rem",
        }}
      />
    </MotionPaper>
  );
};

export default SearchBarHome;
