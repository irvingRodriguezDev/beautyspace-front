import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles"; // Importar useTheme

const settings = ["Perfil", "Mi Cuenta", "Dashboard", "Cerrar Sesión"];

function Header() {
  const theme = useTheme(); // Obtener el tema
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth='lg'>
        {" "}
        {/* Ajustar maxWidth para un aspecto más centrado */}
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/' // Enlace a la página principal
            sx={{
              mr: 2,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif", // Usar fuente del tema
              fontWeight: 700,
              color: theme.palette.primary.main, // Usar color rosa principal del tema
              textDecoration: "none",
            }}
          >
            BeautySpace
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Abrir configuración'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* Puedes personalizar el Avatar con la inicial del usuario o una imagen predeterminada */}
                <Avatar
                  alt='Usuario'
                  src='/static/images/avatar/default.jpg'
                  sx={{
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                  }}
                >
                  U
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: theme.palette.text.primary,
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
