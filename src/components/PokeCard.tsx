const PokeCard = ({ pokemon }) => {
  //console.log(pokemon.sprites);
  return (
    <div className="border border-grey-500 w-[200px] p-3 m-3 rounded-lg transition duration-500 hover:scale-105 flex justify-center flex-col items-center relative">
      <p className="rounded-full bg-blue-800 flex justify-center items-center text-white absolute right-1 top-1 px-2">{pokemon.id}</p>
      <h3 className="text-lg font-bold">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </h3>
      <img
        className="w-[150px] h-[150px]"
        // pokemon.sprites.other.dream_world.front_default -> Other pokepics but some end numbers are not available
        src={pokemon.sprites.other.home.front_default}
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
