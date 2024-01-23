import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import ShimmerCard from "./ShimmerCard";

const PokeLayout = ({ firstIdx , endIdx }: {firstIdx: number, endIdx: number}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<any>([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const pokemonPerPage: number = Math.min(30, endIdx);

  function generateUrls(start: number, end: number) {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const urls = [];
    for (let i = start; i <= end; i++) {
      urls.push(`${baseUrl}/${i}`);
    }
    return urls;
  }

  const fetchPokemon = async () => {
    const urls = generateUrls(firstIdx, endIdx);
    try {
      console.log("Fetching again!" + (Math.random() % 23));
      const pokePromises = urls.map((url) => fetch(url));
      const pokeResponses = await Promise.all(pokePromises);
      const pokeData = await Promise.all(
        pokeResponses.map((response) => response.json())
      );
      setPokemons(pokeData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    setPageNumber((page) => page + 1);
  };
  const handlePrevious = () => {
    setPageNumber((page) => (page == 1 ? 1 : page - 1));
  };

  useEffect(() => {
    fetchPokemon();
    // fetchPokemonDebounce();
  }, [firstIdx, endIdx]);

  useEffect(() => {
    const startIdx = (pageNumber - 1) * pokemonPerPage;
    const pageEndIdx = startIdx + pokemonPerPage;
    setFilteredPokemon(pokemons.slice(startIdx, pageEndIdx));
  }, [pageNumber, pokemons]);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {loading
          ? // Display shimmer loading cards while data is being fetched
            Array.from({ length: pokemonPerPage }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : // Display actual Pokemon cards when data is loaded
            filteredPokemon.map((pokemon) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
      </div>
      <div className="flex justify-between">
        <button
          className={
            "bg-blue-900 text-white p-3 m-2 rounded-lg hover:bg-blue-950"
          }
          onClick={handlePrevious}
          style={{ visibility: pageNumber === 1 ? "hidden" : "visible" }}
          disabled={loading || pageNumber === 1}
        >
          Previous
        </button>
        <button
          className={
            "bg-blue-900 text-white p-3 m-2 rounded-lg hover:bg-blue-950"
          }
          onClick={handleNext}
          style={{
            visibility:
              pageNumber === Math.ceil(endIdx / pokemonPerPage)
                ? "hidden"
                : "visible",
          }}
          disabled={
            loading || pageNumber === Math.ceil(endIdx / pokemonPerPage)
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PokeLayout;
