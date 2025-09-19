import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false)
   // console.log(country.area.area)
const handleVisit = () =>{
    setVisited(true)
    //console.log('buttn clicked')
    setVisited(!visited)
}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small country"}</p>
            <button onClick={handleVisit}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;