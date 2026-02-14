import "../pages/styles/NavBar.css";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Sistema de Seguimiento</h2>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#">Candidatos</a>
        </li>
        <li>
          <a href="#" className="active">
            Aplicaciones
          </a>
        </li>
        <li>
          <a href="#">Ofertas</a>
        </li>
        <li>
          <a href="#">Usuarios</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
