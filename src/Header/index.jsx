import React from 'react';
import pokedexLogo from '../assets/icon_pokeball.svg'
import './Header.css';

function Header() {

    return (
        <header>
           <img src={ pokedexLogo } alt="Logo pokédex." />
           <h1>Pokédex</h1>
        </header>
    )
}

export { Header };