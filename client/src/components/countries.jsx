import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
        <div>
            <select name="" id="">
                {
                    countries.map(country =>
                        <option value="country"> {country.country} </option>
                    )
                }
            </select>

        </div>
    );
}

export default Countries;