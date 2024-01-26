import { FC, useState, useRef, useEffect } from "react";

interface IFetchBoxProps {
  handleSubmit: (newFirstPokeIdx: number, newLastPokeIdx: number) => void;
}

const FetchBox: FC<IFetchBoxProps> = ({ handleSubmit }) => {
  const [firstIdx, setFirstIdx] = useState<number>(0);
  const [lastIdx, setLastIdx] = useState<number>(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstIdxRef = useRef<HTMLInputElement>(null);
  const secondIdxRef = useRef<HTMLInputElement>(null);

  useEffect(() => firstIdxRef.current?.focus(), []);

  return (
    <div className="p-3 flex justify-center items-center flex-wrap">
      <input
        type="number"
        className="border border-gray-600 h-12 px-5 mx-2 rounded-lg my-1"
        value={firstIdx || ""}
        onChange={(e) => setFirstIdx(Number(e.target.value))}
        onBlur={() => secondIdxRef.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === "Enter") secondIdxRef.current?.focus();
        }}
        placeholder="First Pokemon ID?"
        pattern="[0-9]*"
        ref={firstIdxRef}
      />
      <input
        type="number"
        className="border border-gray-600 h-12 px-5 mx-2 rounded-lg my-1"
        value={lastIdx || ""}
        onChange={(e) => setLastIdx(Number(e.target.value))}
        onBlur={() => buttonRef.current?.focus()}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(firstIdx, lastIdx);
        }}
        placeholder="Last Pokemon ID?"
        pattern="[0-9]*"
        ref={secondIdxRef}
      />
      <button
        className="bg-blue-900 text-white h-12 px-5 my-2 rounded-lg hover:bg-blue-950"
        onClick={() => handleSubmit(firstIdx, lastIdx)}
        ref={buttonRef}
      >
        Get Pokemon!
      </button>
    </div>
  );
};

export default FetchBox;
