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
            <h1> {liveData.country} </h1>
        </div>
    );
}

export default Country;