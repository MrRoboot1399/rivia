import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log({ nombre, email, password });
    alert("Usuario registrado correctamente ✅");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        
        {/* Logo */}
        <div className="text-center mb-3">
          <img 
            src="https://oficinavirtualderadicacion.sena.edu.co/oficinavirtual/Resources/logoSenaNaranja.png"
            alt="SENA"
            style={{ width: "80px" }}
          />
          <h4 className="mt-2">Registro RIV-IA</h4>
        </div>

        <form onSubmit={handleRegister}>
          
          <div className="mb-3">
            <label>Nombre</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Correo</label>
            <input 
              type="email"
              className="form-control"
              placeholder="ejemplo@sena.edu.co"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Contraseña</label>
            <input 
              type="password"
              className="form-control"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-success w-100">
            Registrarse
          </button>

        </form>

        {/* Volver al login */}
        <p className="mt-3 text-center">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;