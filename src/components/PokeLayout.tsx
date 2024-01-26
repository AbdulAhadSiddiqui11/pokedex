import { FC, Key, useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import ShimmerCard from "./ShimmerCard";
import Pagination from "./Pagination";

interface IpokeLayoutProps {
  firstIdx: number;
  endIdx: number;
}

const PokeLayout: FC<IpokeLayoutProps> = ({ firstIdx, endIdx }) => {
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [pokemons, setPokemons] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const pokemonPerPage: number = Math.min(30, endIdx);

  function generateUrls(start: number, end: number): string[] {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const urls = [];
    for (let i = start; i <= end; i++) {
      urls.push(`${baseUrl}/${i}`);
    }
    return urls;
  }

  const fetchPokemon = async (): Promise<void> => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  const updatePageNumber = (page: number): void => {
    setPageNumber(page);
    scrollToTop();
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstIdx, endIdx]);

  const lastPokemon = pageNumber * pokemonPerPage;
  const firstPokemon = lastPokemon - pokemonPerPage;
  const filteredPokemon = pokemons.slice(firstPokemon, lastPokemon);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {loading
          ? // Display shimmer loading cards while data is being fetched
            Array.from({ length: pokemonPerPage }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : // Display actual Pokemon cards when data is loaded
            filteredPokemon.map((pokemon: { id: Key | null | undefined }) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
      </div>
      <div className="flex justify-end p-2">
        <Pagination
          totalPokemon={pokemons.length}
          pokemonPerPage={pokemonPerPage}
          setPageNumber={updatePageNumber}
        />
      </div>
    </>
  );
};

export default PokeLayout;
