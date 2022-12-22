import React, { useState, useEffect } from "react";
import { POKEMON_API_BASE, GET_ALL_POKEMONS } from "../const/apiConst";
import { CardPokemon } from "../CardPokemon";
import "./ContainerCardPokemon.css";

function ContainerCardPokemon() {
  const allPokemonsURL = `${POKEMON_API_BASE}${GET_ALL_POKEMONS}`;
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [indexCurrentPokemon, setIndexCurrentPokemon] = useState([0]);

  const clickPrev = () => {
    setIndexCurrentPokemon(([indexCurrentPokemon]) => [indexCurrentPokemon - 1])
  };
  
  const clickNext = () => {
    setIndexCurrentPokemon(([indexCurrentPokemon]) => [indexCurrentPokemon + 1])
  };

  useEffect(() => {
    fetch(allPokemonsURL)
      .then((allPokemonRes) => allPokemonRes.json())
      .then((jsonAllPokemon) => {
        setAllPokemon(jsonAllPokemon.results);

        const firstURLPokemon = jsonAllPokemon.results[indexCurrentPokemon].url;
        return fetch(firstURLPokemon);
      })
      .then((pokemonRes) => pokemonRes.json())
      .then((jsonCurrentPokemon) => setCurrentPokemon(jsonCurrentPokemon))
      .catch((error) => console.error(error));
  }, [indexCurrentPokemon]);

  return (
    <section className="containerCarPokemon">
      {indexCurrentPokemon > 0 ? (
      <button className="arrow arrow--left" onClick={clickPrev}>
      </button>
      ) : null}
      {indexCurrentPokemon < 150 ?(
      <button className="arrow arrow--right" onClick={clickNext}>
      </button>
      ): null}
      <CardPokemon currentPokemon={ currentPokemon }/>
    </section>
  );
}

export { ContainerCardPokemon };