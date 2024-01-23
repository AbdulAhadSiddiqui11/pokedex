import { useState } from "react";

const FetchBox = ({ handleSubmit }) => {
  const [firstIdx, setFirstIdx] = useState<number>(0);
  const [lastIdx, setLastIdx] = useState<number>(0);

  return (
    <div className="p-3 flex justify-center items-center flex-wrap">
      <input
        type="number"
        className="border border-gray-600 h-12 px-5 mx-2 rounded-lg py-1"
        value={firstIdx || ""}
        onChange={(e) => setFirstIdx(Number(e.target.value))}
        placeholder="First Pokemon ID?"
        pattern="[0-9]*"
      />
      <input
        type="number"
        className="border border-gray-600 h-12 px-5 mx-2 rounded-lg py-1"
        value={lastIdx || ""}
        onChange={(e) => setLastIdx(Number(e.target.value))}
        placeholder="Last Pokemon ID?"
        pattern="[0-9]*"
      />
      <button
        className="bg-blue-900 text-white h-12 px-5 my-2 rounded-lg hover:bg-blue-950 py-1"
        onClick={() => handleSubmit(firstIdx, lastIdx)}
      >
        Get Pokemon!
      </button>
    </div>
  );
};

export default FetchBox;
