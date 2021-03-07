import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {

    const [historicalData, setHistoricalData] = useState([]);

    function modifiedData(data, caseType = 'cases') {
        let chart = [];
        let point;
        for (let date in data.cases) {
            if (point) {
                let newPoint = {
                    x: date,
                    y: data[caseType][date] - point
                };
                chart.push(newPoint);
            }
            point = data[caseType][date]
        }
        return chart;
    }

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
                const newChart = modifiedData(res.data)
                setHistoricalData(newChart);
                console.log(historicalData);
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
                        labels: historicalData.map(date => date.x),
                        datasets: [
                            {
                                label: 'Cases',
                                data: historicalData.map(cases => cases.y),
                                fill: false,
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