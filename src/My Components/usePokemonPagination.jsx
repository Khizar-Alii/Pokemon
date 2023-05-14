import { useEffect, useState } from "react";
import axios from "axios";

const usePokemonPagination = (initialUrl) => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchPokemons(initialUrl);
  }, [initialUrl]);

  const fetchPokemons = (url) => {
    axios
      .get(url)
      .then((res) => {
        const pokemonNames = res.data.results.map((pokemon) => pokemon.name);
        const pokemonRequests = pokemonNames.map((name) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        );
        Promise.all(pokemonRequests)
          .then((responses) => {
            const pokemonData = responses.map((response) => response.data);
            setPokemons(pokemonData);
            setNextPage(res.data.next);
            setPrevPage(res.data.previous);
          })
          .catch((error) => {
            console.error("Error fetching Pokémon data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching Pokémon names:", error);
      });
  };

  const goToNextPage = () => {
    if (nextPage) {
      fetchPokemons(nextPage);
    }
  };

  const goToPrevPage = () => {
    if (prevPage) {
      fetchPokemons(prevPage);
    }
  };

  return { pokemons, nextPage, prevPage, goToNextPage, goToPrevPage };
};

export default usePokemonPagination;
