import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {

    const [historicalData, setHistoricalData] = useState([]);

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
        console.log(chart)
        return chart;
    }



    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=365')
                const newChart = modifiedData(res.data)
                setHistoricalData(newChart);
            } catch (error) {
                console.error(error)
            }
        }
        getData();
    }, [])


    return (
        <div>
            <h1> Worldwide </h1>
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

    );
}

export default LineChart;