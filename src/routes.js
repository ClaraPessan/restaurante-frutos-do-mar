import { BrowserRouter, Route, Routes } from "react-router-dom"
import NossasOpcoes from "./pages/NossasOpcoes";
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Cabecalho/>
      <Routes>   
          <Route path="/" element={<Inicio/>}/>
          <Route path="/nossasOpcoes" element={<NossasOpcoes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;