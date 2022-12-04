import React, { useEffect, useState } from "react";
import { POKEMON_API_BASE } from "../const/apiConst";
import "./RandomPokemon.css";

function RandomPokemon() {
  const temporalPokemons = [];
  const [othersPokemon, setOtherPokemon] = useState([]);
  console.log("Others", othersPokemon);

  useEffect(() => {
    const randomPokemonIds = [
      Math.round(Math.random() * 150),
      Math.round(Math.random() * 150),
      Math.round(Math.random() * 150),
      Math.round(Math.random() * 150),
    ];
    console.log("ids", randomPokemonIds);

    for (let i = 0; i < randomPokemonIds.length; i++) {
      let urlPokemon = POKEMON_API_BASE + "/" + randomPokemonIds[i];

      fetch(urlPokemon)
        .then((resURLPokemon) => resURLPokemon.json())
        .then((pokemon) => temporalPokemons.push(pokemon))
        .then(() => {
          if (temporalPokemons.length === 4) {
            setOtherPokemon(temporalPokemons);
          }
        })
        .catch((error) => console.error(error));
      console.log("Temporales", temporalPokemons);
    }
  }, []);

  return (
    <main className="randomCard">
      <h2 className="randomCard__title">Others</h2>
      <section className="randomCard__pokemons">
        {othersPokemon.map((pokemon) => (
          <article key={pokemon.id} className="randomCard__details">
            <img
              className="randomCard__image"
              src={
                pokemon.sprites
                  ? pokemon.sprites.other.dream_world.front_default
                  : ""
              }
              alt=""
            />
            <h3 className="randomCard__pokemonName">
              {pokemon.name ? pokemon.name : ""}
            </h3>
          </article>
        ))}
      </section>
    </main>
  );
}

export { RandomPokemon };
