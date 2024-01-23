import { useState } from "react";

const FetchBox = ({ handleSubmit }) => {
  const [firstIdx, setFirstIdx] = useState<number>(0);
  const [lastIdx, setLastIdx] = useState<number>(0);

  return (
    <div className="p-3 flex justify-center items-center">
      <input
        type="number"
        className="border border-gray-600 w-46 h-12 px-5 mx-2 rounded-lg"
        value={firstIdx || ""}
        onChange={(e) => setFirstIdx(Number(e.target.value))}
        placeholder="First Pokemon ID?"
        pattern="[0-9]*"
      />
      <input
        type="number"
        className="border border-gray-600 w-46 h-12 px-5 mx-2 rounded-lg"
        value={lastIdx || ""}
        onChange={(e) => setLastIdx(Number(e.target.value))}
        placeholder="Last Pokemon ID?"
        pattern="[0-9]*"
      />
      <button
        className="bg-blue-900 text-white h-12 px-5 ml-2 rounded-lg hover:bg-blue-950"
        onClick={() => handleSubmit(firstIdx, lastIdx)}
      >
        Get Pokemon!
      </button>
    </div>
  );
};

export default FetchBox;
