import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación (luego lo conectamos a backend)
    if (email === "admin@sena.edu.co" && password === "1234") {
      alert("Inicio de sesión exitoso ✅");
    } else {
      alert("Credenciales incorrectas ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        
        {/* Logo SENA */}
        <div className="text-center mb-3">
          <img 
            src="https://sciudadanos.sena.edu.co/Resources/logoSena.png"
            alt="SENA"
            style={{ width: "80px" }}
          />
          <h4 className="mt-2">RIV-IA</h4>
        </div>

        <form onSubmit={handleLogin}>
          
          <div className="mb-3">
            <label>Correo</label>
            <input 
              type="email"
              className="form-control"
              placeholder="ejemplo@sena.edu.co"
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-success w-100">
            Ingresar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;