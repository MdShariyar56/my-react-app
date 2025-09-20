import React, { useState } from 'react';
import './Country.css'

const Country = ({ country ,  handleVisitedCountries,handlerVisitedFlag}) => {
    const [visited, setVisited] = useState(false)
    console.log(handleVisitedCountries)
   // console.log(country.area.area)
const handleVisit = () =>{
    //console.log('buttn clicked')
    setVisited(!visited)
    handleVisitedCountries(country);
}
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <h4>Population: {country.population.population}</h4>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "Big Country" : "Small country"}</p>
            <button onClick={handleVisit}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() =>{handlerVisitedFlag(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;