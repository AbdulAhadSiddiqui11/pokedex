import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokeLayout from "./components/PokeLayout";
import Search from "./components/Search";

function App() {
  const [lastPokeIdx, setLastPokeIdx] = useState(Math.floor(Math.random() * 30) + 1);

  const handleSetLastPokeIdx = (newLastPokeIdx) => {
    setLastPokeIdx(newLastPokeIdx);
  };

  return (
    <>
      <Header />
      {/* <PokeCard pokemon={pokemon}/> */}
      {/* <ShimmerCard /> */}
      <Search setLast={handleSetLastPokeIdx} lastIdx={lastPokeIdx} />
      <PokeLayout endIdx={lastPokeIdx} />
      <Footer />
    </>
  );
}

export default App;
