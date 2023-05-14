import React, { useState } from "react";
import usePokemonPagination from "./usePokemonPagination";
import "./Pokemonz.css";
import { NavLink } from "react-router-dom";

function Pokemonz() {
  const [searchQuery, setSearchQuery] = useState("");
  const { pokemons, nextPage, prevPage, goToNextPage, goToPrevPage } =
    usePokemonPagination("https://pokeapi.co/api/v2/pokemon?limit=20");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPokemons = searchQuery
    ? pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : pokemons;

  return (
    <div className="pokemonDiv">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="allPokemon">
        {filteredPokemons.map((pokemon, index) => (
          <NavLink
            key={index}
            to={`/pokemondetails/${pokemon.name}`}
            className="linksToDetails"
          >
            <div className="pokemonBox">
              <h4>{pokemon.name}</h4>
              <img
                src={pokemon.sprites.front_default}
                alt="pokemonImage"
                style={{ width: "100px", height: "100px" }}
              />
            </div>
          </NavLink>
        ))}
      </div>
      <div className="paginationButtons">
        <button onClick={goToPrevPage} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pokemonz;
