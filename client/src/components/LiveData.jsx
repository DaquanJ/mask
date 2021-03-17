import axios from 'axios';
import numeral from 'numeral';
import React, { useState, useEffect } from 'react';

import '../styles/liveData.css';

const LiveData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                setData(res.data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {

                <div className='cards' >
                    <div className='cases' >
                        <p> Cases </p>
                        <h2 id='cases' > {numeral(data.todayCases).format('+0,0')} </h2>
                        <p> {numeral(data.cases).format('0,0')} Total </p>
                    </div>
                    <div className='deaths' >
                        <p> Deaths </p>
                        <h2 id='deaths'> {numeral(data.todayDeaths).format('+0,0')} </h2>
                        <p>  {numeral(data.deaths).format('0,0')} Total </p>
                    </div>
                    <div className='recovered' >
                        <p> Recovered </p>
                        <h2 id='recovered' > {numeral(data.todayRecovered).format('+0,0')} </h2>
                        <p> {numeral(data.recovered).format('0,0')} Total </p>
                    </div>

                </div>


            }
        </div>
    )
}

export default LiveData;