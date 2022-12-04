import React, { useState, useEffect } from "react";
import { POKEMON_API_BASE, GET_ALL_POKEMONS } from "../const/apiConst";
import "./CardPokemon.css";

function CardPokemon() {
  const allPokemonsURL = `${POKEMON_API_BASE}${GET_ALL_POKEMONS}`;
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const randomNumber = [ ]

  useEffect(() => {
    fetch(allPokemonsURL)
      .then((allPokemonRes) => allPokemonRes.json())
      .then((jsonAllPokemon) => {
        setAllPokemon(jsonAllPokemon.results);

        const firstURLPokemon = jsonAllPokemon.results[0].url;
        return fetch(firstURLPokemon);
      })
      .then((pokemonRes) => pokemonRes.json())
      .then((jsonCurrentPokemon) => setCurrentPokemon(jsonCurrentPokemon))
      .catch((error) => console.error(error));
  }, []);
  return (
    <main className="card">
      <section key={currentPokemon.id} className="card__header">
        <h2 aria-label="pokemonName" className="card__pokemonName">
          {currentPokemon.name ? currentPokemon.name : ""}
        </h2>
        <img
          aria-label="pokemonImage"
          className="card__pokemonImage"
          src={
            currentPokemon.sprites
              ? currentPokemon.sprites.other.dream_world.front_default
              : ""
          }
        />
      </section>
      <section className="card__body">
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">No.</p>
          <p aria-label="pokemonNumber" className="card__pokemonNumber">
            {currentPokemon.order ? currentPokemon.order : ""}
          </p>
        </article>
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">EXP</p>
          <p aria-label="pokemonEXP" className="card__pokemonEXP">
            {currentPokemon.base_experience
              ? currentPokemon.base_experience
              : ""}
          </p>
        </article>
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">Type</p>
          <p aria-label="pokemonType" className="card__pokemonType">
            {currentPokemon.types && currentPokemon.types.length > 0
              ? currentPokemon.types[0].type.name
              : ""}
          </p>
        </article>
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">Hability</p>
          <p aria-label="pokemonHability" className="card__pokemonHability">
            {currentPokemon.abilities && currentPokemon.abilities.length > 0
              ? currentPokemon.abilities[0].ability.name
              : ""}
          </p>
        </article>
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">Height</p>
          <p aria-label="pokemonHeight" className="card__pokemonHeight">
            {currentPokemon.height ? currentPokemon.height : ""}
          </p>
        </article>
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">Weight</p>
          <p aria-label="pokemonWeight" className="card__pokemonWeight">
            {currentPokemon.weight ? currentPokemon.weight : ""}
          </p>
        </article>
      </section>
      <section aria-label="othersPokemon">
        <img/>
      </section>
    </main>
  );
}

export { CardPokemon };
