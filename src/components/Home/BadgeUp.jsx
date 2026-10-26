import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import SparklesIcon from "@mui/icons-material/AutoAwesome";

const BadgeUp = () => {
  return (
    <Box display='flex' sx={{ justifyContent: "center" }} mb={2}>
      <Chip
        icon={
          <SparklesIcon
            sx={{ fontSize: "16px !important", color: "#e91e63" }}
          />
        }
        label='La nueva forma de agendar tu belleza'
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          fontWeight: 600,
          color: "#2d3748",
          border: "1px solid rgba(233, 30, 99, 0.2)",
          py: 1.9,
          px: 1.8,
        }}
      />
    </Box>
  );
};

export default BadgeUp;
