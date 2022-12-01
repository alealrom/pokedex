import React, { useState, useEffect } from "react";
import { POKEMON_API_BASE, GET_ALL_POKEMONS } from "../const/apiConst";
import "./CardPokemon.css";

function CardPokemon() {
  const allPokemonsURL = `${POKEMON_API_BASE}${GET_ALL_POKEMONS}`;
  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});

  useEffect(() => {
    fetch(allPokemonsURL)
      .then((allPokemonRes) => allPokemonRes.json())
      .then((jsonAllPokemon) => {
        setAllPokemon(jsonAllPokemon.results);

        const firstURLPokemon = jsonAllPokemon.results[3].url;
        return fetch(firstURLPokemon);
      })
      .then((pokemonRes) => pokemonRes.json())
      .then((jsonCurrentPokemon) => setCurrentPokemon(jsonCurrentPokemon))
      .catch((error) => console.error(error));
  }, []);
  return (
    <main class="card">
      <section class="card__header">
        <h2 aria-label="pokemonName" class="card__pokemonName">
          {currentPokemon.name ? currentPokemon.name : ""}
        </h2>
        <img
          aria-label="pokemonImage"
          class="card__pokemonImage"
          src={
            currentPokemon.sprites
              ? currentPokemon.sprites.other.dream_world.front_default
              : ""
          }
        />
      </section>
      <section class="card__body">
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">No.</p>
          <p aria-label="pokemonNumber" class="card__pokemonNumber">
            {currentPokemon.order ? currentPokemon.order : ""}
          </p>
        </article>
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">EXP</p>
          <p aria-label="pokemonEXP" class="card__pokemonEXP">
            {currentPokemon.base_experience
              ? currentPokemon.base_experience
              : ""}
          </p>
        </article>
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">Type</p>
          <p aria-label="pokemonType" class="card__pokemonType">
            {currentPokemon.types && currentPokemon.types.length > 0
              ? currentPokemon.types[0].type.name
              : ""}
          </p>
        </article>
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">Hability</p>
          <p aria-label="pokemonHability" class="card__pokemonHability">
            {currentPokemon.abilities && currentPokemon.abilities.length > 0
              ? currentPokemon.abilities[0].ability.name
              : ""}
          </p>
        </article>
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">Height</p>
          <p aria-label="pokemonHeight" class="card__pokemonHeight">
            {currentPokemon.height ? currentPokemon.height : ""}
          </p>
        </article>
        <article class="card__pokemonDetails">
          <p class="card__pokemonTag">Weight</p>
          <p aria-label="pokemonWeight" class="card__pokemonWeight">
            {currentPokemon.weight ? currentPokemon.weight : ""}
          </p>
        </article>
      </section>
    </main>
  );
}

export { CardPokemon };
