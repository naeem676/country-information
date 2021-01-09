import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';


const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data));
    }, [])
    return (
        <div>
            {
                country.map(count => <Country count={count}></Country>)
            }
            
            
        </div>
    );
};

export default Home;