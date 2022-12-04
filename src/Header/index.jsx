import React from "react";
import pokedexLogo from "../assets/icon_pokeball.svg";
import "./Header.css";

function Header({ pageTitle }) {
  return (
    <header className="header">
      <img className="header__logo" src={pokedexLogo} alt="Logo pokédex." />
      <h1 className="header__title">{pageTitle}</h1>
    </header>
  );
}

export { Header };
