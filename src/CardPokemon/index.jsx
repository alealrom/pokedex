import React from "react";
import "./CardPokemon.css";

function CardPokemon({ currentPokemon }) {
  return (
    <section className="card">
      <article key={currentPokemon.id} className="card__header">
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
      </article>
      <article className="card__body">
        <article className="card__pokemonDetails">
          <p className="card__pokemonTag">No.</p>
          <p aria-label="pokemonNumber" className="card__pokemonNumber">
            {currentPokemon.id ? currentPokemon.id : ""}
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
      </article>
      <article aria-label="othersPokemon">
        <img/>
      </article>
    </section>
  );
}

export { CardPokemon };
