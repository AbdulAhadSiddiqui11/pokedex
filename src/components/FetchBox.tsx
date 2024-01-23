import { useState } from "react";

const FetchBox = ({ setLast, lastIdx }) => {
  const [searchTerm, setSearchTerm] = useState<number>(0);
  return (
    <div className="p-3 flex justify-center items-center">
      <input
        type="number"
        className="border border-gray-600 w-96 h-12 px-5 rounded-lg"
        value={searchTerm || ""}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="How many pokemon?"
        pattern="[0-9]*"
      />
      <button
        className="bg-blue-900 text-white h-12 px-5 ml-2 rounded-lg hover:bg-blue-950"
        onClick={() => setLast(searchTerm)}
      >
        Get Pokemon!
      </button>
    </div>
  );
};

export default FetchBox;
