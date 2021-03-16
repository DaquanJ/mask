import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Country = ({ match }) => {

    const [liveData, setLiveData] = useState([])
    const [chartData, setChartData] = useState([])


    async function getLiveData() {
        try {
            const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${match.params.country}?strict=true`)
            setLiveData(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function getChartData() {
        try {
            const res = await axios.get(`https://disease.sh/v3/covid-19/historical/${match.params.country}?lastdays=30`)
            setChartData(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getLiveData();
        getChartData();
    }, [])

    return (
        <div>

            {

                <div className='cards' >
                    <div className='cases' >
                        <p> Cases </p>
                        <h2 id='cases' > + {liveData.todayCases} </h2>
                        <p> {liveData.cases} Total </p>
                    </div>
                    <div className='deaths' >
                        <p> Deaths </p>
                        <h2 id='deaths'> + {liveData.todayDeaths} </h2>
                        <p> {liveData.deaths} Total </p>
                    </div>
                    <div className='recovered' >
                        <p> Recovered </p>
                        <h2 id='recovered' > + {liveData.todayRecovered} </h2>
                        <p> {liveData.recovered} Total </p>
                    </div>

                </div>


            }
        </div>
    );
}

export default Country;