import React from 'react'
import axios from 'axios'


function Search( setTypesSelectedArray) {
    const [types, setTyps] = useState([])


    useEffect(() => {
        async function fetchTypes() {
            const response = axios.get('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json')
            setTypes(response.data.map(type => type.english))
        }
        fetchTypes()
    }, [])
    
const handleClickF = (e) => {
    const {value, checked } = e.target

    if (checked) {


        return (
    <div>
        {
            types.map(type => <div key = (type)>
        }
    </div>
  )
}

export default Search