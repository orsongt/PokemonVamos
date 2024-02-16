import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="text-logo" >
    {/* <img className="header-title" src="./pokedex-header.png" alt="pokédex" title="pokédex" /> */}
    Pokémon <br />
    Vamos!
  </span>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/team">Mon équipe</Link>
      </li>
    </ul>
  </div>
</nav>
  );
}
