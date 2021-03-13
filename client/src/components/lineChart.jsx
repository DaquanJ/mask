import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

import '../styles/lineChart.css'

const LineChart = () => {

    const [historicalData, setHistoricalData] = useState([]);
    const [days, setDays] = useState({});


    function modifiedData(data) {
        let chart = [];
        let point;

        for (let date in data.cases) {
            if (point) {
                let newPoint = {
                    date: date,
                    cases: data.cases[date],
                    deaths: data.deaths[date],
                    recovered: data.recovered[date],
                };
                chart.push(newPoint);
            }
            point = data
        }

        return chart;
    }

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=365')
                const newChart = modifiedData(res.data)
                setHistoricalData(newChart);
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getData();
    }, [])

    function handleChange(e) {
        const { id, value } = e.target;
        setDays({ [id]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const res = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=${days.lastDays}`)
            const newChart = modifiedData(res.data)
            setHistoricalData(newChart);
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <div>
            <form onChange={(e) => handleChange(e)} onSubmit={(event) => handleSubmit(event)} >
                <input type="text" id='lastDays' placeholder='Choose Days to view' />
                <input type="submit" />
            </form>
            <div className='chart' >
                {historicalData.length > 0 &&

                    <Line
                        data={{
                            labels: historicalData.map(({ date }) => date),
                            datasets: [
                                {
                                    label: 'Cases',
                                    data: historicalData.map(({ cases }) => cases),
                                    borderColor: '#3333ff',
                                    fill: true,
                                },
                                {
                                    label: 'Deaths',
                                    data: historicalData.map(({ deaths }) => deaths),
                                    fill: true,
                                    backgroundColor: 'rgba(255,0,0,0.5)',
                                    borderColor: 'red',
                                },
                                {
                                    label: 'Recovered',
                                    data: historicalData.map(({ recovered }) => recovered),
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

export default LineChart;