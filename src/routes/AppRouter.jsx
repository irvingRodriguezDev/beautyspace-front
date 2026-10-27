import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../containers/NotFound/NotFound";
import Spinner from "../components/Loading/Spinner";
import { useState } from "react";
import HomeMap from "../containers/Home/HomeMap";

function AppRouter() {
  //   const { isAuthenticated, loading } = useAuth();
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Spinner fullScreen={true} label='Cargando contenido' />;
  }
  return (
    <>
      <Routes>
        {/*Rutas siempre accesibles*/}
        <Route path='/' element={<HomeMap />} />
        {/* Ruta privada */}
        {/* <Route
          path='/mi-perfil'
          element={
            isAuthenticated ? (
              <Profile />
            ) : (
              <Navigate to='/iniciar-sesion' replace />
            )
          }
        /> */}
        {/* Rutas públicas */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
