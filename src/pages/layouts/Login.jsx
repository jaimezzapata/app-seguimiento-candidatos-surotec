import { useState } from "react";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" id="email" placeholder="ejemplo@correo.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" id="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
