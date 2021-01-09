import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetel = () => {
    const {name} = useParams();
    const [country, setCountry]= useState([{}]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, []);
    return (
        <div>
        <h1>{name}</h1>
        <h4>population:{country.population}</h4>
        <h4>capital:{country.capital}</h4>
            
        </div>
    );
};

export default CountryDetel;