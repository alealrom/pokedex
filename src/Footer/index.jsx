import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Challenge by{" "}
        <a
          className="footer__link"
          href="https://wiki.pragma.com.co/ejercicio-practico-front-end-pokedex"
          target="_blank"
        >
          Pragma
        </a>
      </p>
      <p className="footer__text">
        Coded by{" "}
        <a className="footer__link" href="https://alealrom.co/" target="_blank">
          Alejandra Álvarez Romero
        </a>
      </p>
    </footer>
  );
}

export { Footer };
