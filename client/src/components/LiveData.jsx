import axios from 'axios';
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
                        <h2 id='cases' > + {data.todayCases} </h2>
                        <p> {data.cases} Total </p>
                    </div>
                    <div className='deaths' >
                        <p> Deaths </p>
                        <h2 id='deaths'> + {data.todayDeaths} </h2>
                        <p> {data.deaths} Total </p>
                    </div>
                    <div className='recovered' >
                        <p> Recovered </p>
                        <h2 id='recovered' > + {data.todayRecovered} </h2>
                        <p> {data.recovered} Total </p>
                    </div>

                </div>


            }
        </div>
    )
}

export default LiveData;