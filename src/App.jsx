import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { CardPokemon } from './CardPokemon';
import { RandomPokemon } from './RandomPokemon';
import { Footer } from './Footer';
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Header pageTitle='Pokédex'/>
      <CardPokemon/>
      <RandomPokemon/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
