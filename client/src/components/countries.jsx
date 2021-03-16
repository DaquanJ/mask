import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../styles/countries.css';

import { Link } from 'react-router-dom';

const Countries = () => {

    const [countries, setCountries] = useState([]);

    async function getCountries() {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries')
            setCountries(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div className='countries'>
            <Link to='/' >  <button className='country-btn' > World Wide ▼ </button> </Link>
            <div id='country' >
                {
                    countries.map(country =>
                        <Link id='country-link' to={`/${country.country}`}> <li> {country.country} </li>  </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Countries;