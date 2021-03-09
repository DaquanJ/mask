import axios from 'axios';
import React, { useState, useEffect } from 'react';


const LiveData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                setData([res.data])
                console.log([res.data])
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Live ! </h1>
            {
                data.map((info) => (
                    <div className='cards' >
                        <div>
                            <p> Cases </p>
                            <h1> + {info.todayCases} </h1>
                            <p> {info.cases} Total </p>
                        </div>
                        <div>
                            <p> Deaths </p>
                            <h1> + {info.todayDeaths} </h1>
                            <p> {info.deaths} Total </p>
                        </div>
                        <div>
                            <p> Recovered </p>
                            <h1> + {info.todayRecovered} </h1>
                            <p> {info.recovered} Total </p>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default LiveData;