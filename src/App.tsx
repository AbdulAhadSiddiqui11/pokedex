import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokeLayout from "./components/PokeLayout";
import FetchBox from "./components/FetchBox";

function App() {
  const [lastPokeIdx, setLastPokeIdx] = useState<number>(Math.floor(Math.random() * 30) + 1);
  const [firstPokeIdx, setFirstPokeIdx] = useState<number>(1);

  const handleSubmit = (newFirstPokeIdx, newLastPokeIdx) => {
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
}

export default App;
