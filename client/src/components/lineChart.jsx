import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LineChart = () => {

    const [historicalData, setHistoricalData] = useState();

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
                setHistoricalData(res.data);
                console.log(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getData();
    }, [])

    return (
        <div>
            <h1> Line Chart </h1>
        </div>
    );
}

export default LineChart;