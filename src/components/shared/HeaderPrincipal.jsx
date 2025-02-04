import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderPrincipal.css";

const HeaderPrincipal = () => {
  return (
    <header className="header-principal">
      <Link className="header-logo" to={"/"}>
        Booking Hotel
      </Link>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-list-item">
            <Link className="header-link" to="/reservation">
              Reservations
            </Link>
          </li>
          <li className="header-list-item">
            <Link className="header-link" to={"/register"}>
              Register
            </Link>
          </li>
          <li className="header-list-item">
            <Link className="header-link" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderPrincipal;
