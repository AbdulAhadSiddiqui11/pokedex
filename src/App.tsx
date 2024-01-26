import { FC, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokeLayout from "./components/PokeLayout";
import FetchBox from "./components/FetchBox";

const App: FC = () => {
  const [lastPokeIdx, setLastPokeIdx] = useState<number>(
    Math.floor(Math.random() * 30) + 1
  );
  const [firstPokeIdx, setFirstPokeIdx] = useState<number>(1);

  const handleSubmit = (
    newFirstPokeIdx: number,
    newLastPokeIdx: number
  ): void => {
    if (newLastPokeIdx < newFirstPokeIdx) {
      alert("Last Pokemon ID must be greater than first Pokemon ID!");
      return;
    }

    if (newLastPokeIdx === 0 || newFirstPokeIdx === 0) {
      alert("Pokemon ID must be greater than 0!");
      return;
    }

    setLastPokeIdx(newLastPokeIdx);
    setFirstPokeIdx(newFirstPokeIdx);
  };

  return (
    <>
      <Header />
      {/* <PokeCard pokemon={pokemon}/> */}
      {/* <ShimmerCard /> */}
      <FetchBox handleSubmit={handleSubmit} />
      <PokeLayout firstIdx={firstPokeIdx} endIdx={lastPokeIdx} />
      <Footer />
    </>
  );
};

export default App;
