import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content">
        <img
          className="nav__logo"
          src="https://brandemia.org/sites/default/files/sites/default/files/icono_netflix_nuevo.jpg"
          alt="logo"
        />
        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
