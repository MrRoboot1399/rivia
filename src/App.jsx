import Navbar from "./components/Navbar";
import Asistente from "./components/Asistente";
import Noticias from "./components/Noticias";
import Login from "./components/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Asistente />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;