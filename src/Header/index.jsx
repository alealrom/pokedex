import React from 'react';
import pokedexLogo from '../assets/icon_pokeball.svg'
import './Header.css';

function Header() {

    return (
        <header class='header'>
           <img class='header__logo' src={ pokedexLogo } alt="Logo pokédex." />
           <h1 class='header__title'>Pokédex</h1>
        </header>
    );
}

export { Header };