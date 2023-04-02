import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Search({ setTypeSelectedArray, typeSelectedArray, setPageNumber}) {
  const [types, setTypes] = useState([])


  // this function will be called only once when the component is mounted
  useEffect(() => {
    async function fetchTypes() {
      const response = await axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json')
      setTypes(response.data.map(type => type.english))
    }
    fetchTypes()
  }, [])


  const handleClickF = (e) => {
    const { value, checked } = e.target
    
    if (checked) {
      setTypeSelectedArray(typeSelectedArray => [...typeSelectedArray, value])
      setPageNumber(1);
    } else {
      setTypeSelectedArray(typeSelectedArray => typeSelectedArray.filter(type => type !== value))
      setPageNumber(1);
    }
  }
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); // reset current page to 1
//   };

  return (
    <div className='searchbox'> 
      {
        types.map(type => <div key={type} className='checkbox'>
          <input
            type="checkbox"
            value={type}
            id={type}
            onChange={handleClickF}           
          />
          <label htmlFor={type} className='label'>{type}</label>


        </div>)
      }
    </div>
  )
}

export default Search