import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { CardPokemon } from './CardPokemon';
import { Footer } from './Footer';
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Header pageTitle='Pokédex'/>
      <CardPokemon/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
