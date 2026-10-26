import Box from "@mui/material/Box";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        backgroundImage: "linear-gradient(0deg, #fe6b8bd0 10%, #ffffff 90%)",
        zIndex: 0,
      }}
    >
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
