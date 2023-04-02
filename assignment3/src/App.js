import Search from "./Search";
import FilteredPokemons from "./FilteredPokemons";
import { useEffect, useState } from "react";
//import Page from './Page';
import Pagination from './Pagination';
import axios from 'axios';


function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [typeSelectedArray, setTypeSelectedArray] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    async function getPokemons() {
      const res = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
      setPokemons(res.data);

    }
    getPokemons();
  }, [])

  

  return (
    <>
      <Search
        setTypeSelectedArray={setTypeSelectedArray}
        typeSelectedArray={typeSelectedArray}
        setPageNumber={setPageNumber}
        searchName={searchName}
        setSearchName={setSearchName}
      />
      <FilteredPokemons
        pokemons={pokemons} 
        setPokemons={setPokemons}
        filteredPokemons={filteredPokemons}
        setFilteredPokemons={setFilteredPokemons}
        pageNumber={pageNumber}
        typeSelectedArray={typeSelectedArray}
        searchName={searchName}
      />
      {/* <Page
        pokemons={pokemons}
        pageNumber={pageNumber} /> */}
      <Pagination
        filteredPokemons={filteredPokemons}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

    </>
  );
}

export default App;