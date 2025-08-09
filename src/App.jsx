import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from "./pages/Layout.jsx"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NoPage from "./pages/NoPage"
import CalcMetros from "./pages/CalcMetros.jsx"
import CalCentimetros from './CalcCentimetros.jsx'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="*" element={<NoPage />} />
          <Route path="CalcMetros" element={<CalcMetros />} />
          <Route path="CalcCentimetros" element={<CalCentimetros />} />
        </Route>


      </Routes>
    </BrowserRouter>


  );
}

export default App