import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-links">
      <Link to="/">
        <img
          className="logo"
          src="./Logo-emmaus-connect.svg"
          alt="Emmaus·Logo"
        />
      </Link>

      <div className="Liens">
        <Link className="historic" to="/historical">
          Historique
        </Link>
        <Link className="Deconnexion" to="/login">
          Deconnexion
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
