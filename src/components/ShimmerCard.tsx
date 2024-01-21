const ShimmerCard = () => {
  return (
    <div className="border border-grey-700 w-[200px] p-3 m-3 rounded-lg transition duration-500 hover:scale-105 flex justify-center flex-col items-center animate-pulse">
      <div className="bg-gray-300 w-[100px] h-[20px] rounded mb-3"></div>
      <div className="w-[170px] h-[170px] bg-gray-300 rounded-full mb-3"></div>
      <div className="flex justify-center">
        <p className="bg-gray-300 rounded-md w-[60px] h-[20px] mx-1"></p>
        <p className="bg-gray-300 rounded-md w-[60px] h-[20px] mx-1"></p>
      </div>
    </div>
  );
};

export default ShimmerCard;
