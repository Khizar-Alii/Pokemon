import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { sprites, name, abilities, stats } = pokemonData;

  return (
    <div className="pokemon-details">
      <div className="pokemon-details-box">
        <h2 className="pokemon-name">{name}</h2>
        <img className="pokemon-image" src={sprites.front_default} alt={name} />
        <div className="pokemon-info">
          <div className="pokemon-abilities">
            <h3>Abilities:</h3>
            <ul>
              {abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="pokemon-stats">
            <h3>Stats:</h3>
            <ul>
              {stats.map((stat, index) => (
                <li key={index}>
                  <span className="stat-name">{stat.stat.name}:</span>{" "}
                  <span className="stat-value">{stat.base_stat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
