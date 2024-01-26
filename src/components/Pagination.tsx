import { FC } from "react";

interface IPaginationProps {
  totalPokemon: number;
  pokemonPerPage: number;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  totalPokemon,
  pokemonPerPage,
  setPageNumber,
}) => {
  const pageNumbers = [];
  for (let idx = 1; idx <= Math.ceil(totalPokemon / pokemonPerPage); ++idx) {
    pageNumbers.push(idx);
  }

  return (
    <div className="flex items-center">
      {pageNumbers.map((idx) => (
        <button
          className={
            "bg-blue-900 text-white px-5 py-2 mr-1 rounded-lg hover:bg-blue-950"
          }
          onClick={() => setPageNumber(idx)}
          key={idx}
        >
          {idx}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
