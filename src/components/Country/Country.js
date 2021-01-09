import React from 'react';
import { Link } from 'react-router-dom';
import {} from "./Country.css";

const Country = (props) => {
    const {name, flag} = props.count
    return (
        <div className='country'>
            <img src={flag} alt="" srcset=""/>
            
            <Link to={`/name/${name}`}><h4>{name}</h4></Link>
            
            
        </div>
    );
};

export default Country;