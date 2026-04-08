import Navbar from "./components/Navbar";
import Asistente from "./components/Asistente";
import Noticias from "./pages/Noticias";
import Calendario from "./components/Calendario";
import Sede from "./components/Sede";
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Asistente />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/login" element={<Login />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/sede" element={<Sede />} />
      </Routes>
    </>
  );
}

export default App;