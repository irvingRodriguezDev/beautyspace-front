import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
const Chips = ({ setActiveFilter, activeFilter }) => {
  return (
    <Stack direction='row' spacing={1} sx={{ pointerEvents: "auto" }}>
      <Chip
        icon={
          <StorefrontIcon
            style={{
              fontSize: "26px !important",
              color: activeFilter === "presencial" ? "white" : "black",
            }}
          />
        }
        label='Presencial'
        onClick={() => setActiveFilter("presencial")}
        sx={{
          bgcolor:
            activeFilter === "presencial"
              ? "#e91e63"
              : "rgba(255, 255, 255, 0.9)",
          color: activeFilter === "presencial" ? "#fff" : "#2d3748",
          backdropFilter: "blur(10px)",
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            bgcolor: activeFilter === "presencial" ? "#d81b60" : "#fff",
          },
        }}
      />
      <Chip
        icon={
          <HomeRepairServiceIcon
            style={{
              fontSize: "26px !important",
              color: activeFilter === "domicilio" ? "#fff" : "black",
            }}
          />
        }
        label='A Domicilio'
        onClick={() => setActiveFilter("domicilio")}
        sx={{
          bgcolor:
            activeFilter === "domicilio"
              ? "#e91e63"
              : "rgba(255, 255, 255, 0.9)",
          color: activeFilter === "domicilio" ? "#fff" : "#2d3748",
          backdropFilter: "blur(10px)",
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          "&:hover": {
            bgcolor: activeFilter === "domicilio" ? "#d81b60" : "#fff",
          },
        }}
      />
    </Stack>
  );
};

export default Chips;
