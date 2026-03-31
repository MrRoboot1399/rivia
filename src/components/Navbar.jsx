import { Link } from "react-router-dom";

function Navbar() {
  return (
    // 'p-0' quita el relleno interno del fondo verde
    // 'shadow-sm' opcional para que se vea profesional
    <nav className="navbar navbar-expand-lg navbar-dark bg-success p-0 shadow-sm">
      
      {/* 'container-fluid' con 'p-0' asegura que el contenido toque los bordes */}
      <div className="container-fluid p-0">

        {/* Logo con un pequeño margen a la izquierda para que no toque la pantalla físicamente */}
        <div className="ps-3 py-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sena_Colombia_logo.svg/3840px-Sena_Colombia_logo.svg.png"
            alt="Logo"
            style={{ height: "50px", display: "block" }} 
          />
        </div>

        {/* Menú - 'pe-3' le da un respiro al final a la derecha */}
        <div className="ms-auto pe-4">
          <ul className="navbar-nav flex-row gap-4">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Asistente</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/noticias">Noticias</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white " to="/login">Login</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;