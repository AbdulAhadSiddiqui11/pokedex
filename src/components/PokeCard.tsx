const PokeCard = ({ pokemon }) => {
  return (
    <div className="border border-grey-500 w-[200px] p-3 m-3 rounded-lg transition duration-500 hover:scale-105 flex justify-center flex-col items-center">
      <h3 className="text-lg font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h3>
      <img
        className="w-[150px] h-[150px]"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div className="flex justify-center">
        {pokemon.types.map((type) => (
          <p
            key={type.slot}
            className="bg-black text-white px-1 py-0.5 m-1 rounded-md text-sm "
          >
            {type.type.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
