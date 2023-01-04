import React, { useState } from 'react';
import ReactSwitch from "react-switch";
import { useThemeContext } from './context/ThemeContext';
import { Header } from './Header';
import { ContainerPokemons } from './ContainerPokemons';
import { Footer } from './Footer';
import './App.css'

function App() {
  const {contextTheme, setContextTheme} = useThemeContext();
  const [checked, setChecked] = useState(false);
  
  const handleSwitch = (nextChecked) => {
    setContextTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    setChecked(nextChecked);
  }

  return (
    <React.Fragment>
      <section className='app' id={contextTheme}>
        <article className='app__header'>
          <Header pageTitle='Pokédex'/>
          <ReactSwitch
            onChange={handleSwitch}
            checked={checked}
            onColor="#fbfbfb"
            onHandleColor="#ED5564"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="themeSwitch"
            id="material-switch"/>
        </article>
        <ContainerPokemons/>
        <Footer/>
      </section>
    </React.Fragment>
  );
}

export default App;
