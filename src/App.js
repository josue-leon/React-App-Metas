import { Routes, Route } from "react-router";

import './App.css';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import Layout from "./componentes/compartidos/Layout";
import Page_404 from "./componentes/compartidos/Page_404";

function App() {
  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path="*" element={<Page_404 />} />
        <Route path="lista" element={<Lista />} />
        <Route path="crear" element={<Detalles />} />
      </Route>
    </Routes>

  );
}

export default App;
