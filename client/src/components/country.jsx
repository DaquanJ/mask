import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

const Country = ({ match }) => {

    const [liveData, setLiveData] = useState([])
    const [chartData, setChartData] = useState([])
    const [days, setDays] = useState([]);


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


    function handleChange(e) {
        const { id, value } = e.target;
        setDays({ [id]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        getChartData();
    }


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

            <div className='chart' >

                <form className='view' onChange={(e) => handleChange(e)} onSubmit={(event) => handleSubmit(event)} >
                    <input type="text" id='lastDays' placeholder='Choose number of Days' />
                    <input type="submit" value={`View last ${days.lastDays} days`} />
                </form>

                {chartData.length > 0 &&

                    <Line
                        data={{
                            labels: chartData.map(({ date }) => date),
                            datasets: [
                                {
                                    label: 'Cases',
                                    data: chartData.map(({ cases }) => cases),
                                    borderColor: '#3333ff',
                                    fill: true,
                                },
                                {
                                    label: 'Deaths',
                                    data: chartData.map(({ deaths }) => deaths),
                                    fill: true,
                                    backgroundColor: 'rgba(255,0,0,0.5)',
                                    borderColor: 'red',
                                },
                                {
                                    label: 'Recovered',
                                    data: chartData.map(({ recovered }) => recovered),
                                    fill: true,
                                    backgroundColor: 'rgb(0,191,255, 0.5)',
                                    borderColor: 'rgb(65,105,225)',
                                },

                            ],
                        }}

                        options={{
                            scales: {
                                xAxes: [
                                    {
                                        type: "time",
                                        time: {
                                            parser: "MM/DD/YY",
                                            tooltipFormat: "ll",
                                        },
                                    },
                                ]
                            }
                        }}
                    />
                }

            </div>

        </div>
    );
}

export default Country;