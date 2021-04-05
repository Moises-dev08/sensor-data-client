import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/home.css";

const HomeComponent = () => {
  let [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="header">
      {user && (
        <div className="header__nav">
          <Link className="header__navLink" to="/clientsList">
            <div className="header__option">
              <h4>Listado de clientes</h4>
            </div>
          </Link>
          <Link className="header__navLink" to="/newClient">
            <div className="header__option">
              <h4>Nuevo cliente</h4>
            </div>
          </Link>
          <Link className="header__navLink" to="/updateClient">
            <div className="header__option">
              <h4>Modificar cliente</h4>
            </div>
          </Link>
          <Link className="header__navLink" to="/deleteClient">
            <div className="header__option">
              <h4>Eliminar cliente</h4>
            </div>
          </Link>
          <Link className="header__navLink" to="/map">
            <div className="header__option">
              <h4>Mapa de marcadores</h4>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
