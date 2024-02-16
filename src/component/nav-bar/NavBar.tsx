import { Link } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
  return (<>
    <nav className="navbar fixed-bottom navbar-expand navbar-dark bg-dark text-center">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse justify-content-center navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link position-relative active" to="/">
              <span className="material-icons">home</span>
              <span className="tab-text">home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link position-relative" to="/team">
              <span className="material-icons">interests</span>
              <span className="tab-text">team</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>);
}
