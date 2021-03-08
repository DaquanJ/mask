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
                const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=10')
                const newChart = modifiedData(res.data)
                setHistoricalData(newChart);
                console.log(res.data);
            } catch (error) {
                console.error(error)
            }
        }
        getData();
    }, [])


    return (
        <div>
            <h1> Graph </h1>
            {historicalData.length > 0 &&

                <Line
                    data={{
                        labels: historicalData.map(date => date.date),
                        datasets: [
                            {
                                label: 'Total Cases',
                                data: historicalData.map(cases => cases.cases),
                                fill: false,
                                backgroundColor: 'rgb(255,69,0)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                            },
                            {
                                label: 'Total Deaths',
                                data: historicalData.map(deaths => deaths.deaths),
                                fill: true,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                            },
                            {
                                label: 'Total Recovered',
                                data: historicalData.map(recovered => recovered.recovered),
                                fill: true,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                            },

                        ],
                    }}
                />
            }

        </div>

    );
}

export default LineChart;