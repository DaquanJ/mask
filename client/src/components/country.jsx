import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Country = ({ match }) => {

    const [liveData, setLiveData] = useState([])
    const [chartData, setChartData] = useState([])


    async function getLiveData() {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/countries/uk?strict=true')
            setLiveData(res.data)
            console.log(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    async function getChartData() {
        try {
            const res = await axios.get('https://disease.sh/v3/covid-19/historical/uk?lastdays=30')
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
            Country
        </div>
    );
}

export default Country;