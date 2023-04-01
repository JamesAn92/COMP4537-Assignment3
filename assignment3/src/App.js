import Search from "./Search";
import FilteredPokemons from "./FilteredPokemons";
import { useState } from "react";

function App() {
  const [typeSelectedArray, setTypeSelectedArray] = useState([]);

  return (
    <>
      <Search
        setTypeSelectedArray={setTypeSelectedArray}
        typeSelectedArray={typeSelectedArray}
      />
      <FilteredPokemons
        typeSelectedArray={typeSelectedArray}
      />

    </>
  );
}

export default App;