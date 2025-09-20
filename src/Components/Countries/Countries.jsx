
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setvisitedFlag] = useState([]);



    const handleVisitedCountries = (country) => {
        console.log("handle Visited Countries click", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    
    const handlerVisitedFlag = (flag) =>{
       const newVistedFlags = [...visitedFlag,flag];
       setvisitedFlag(newVistedFlags)

    }

    const countriesData = use (countriesPromise);
    const countries = countriesData.countries;
   
    return (
        <div className='headline'> 
            <h1>In The Countries {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Flags Visited: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)

                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
           <div className='countries'>
                {
                        countries.map(country => <Country
                            key={country.cca3.cca3}
                            country={country} 
                            handleVisitedCountries = { handleVisitedCountries }
                            handlerVisitedFlag = {handlerVisitedFlag}
                            ></Country>)
                    }
           </div>
            
        </div>
    );
};

export default Countries;