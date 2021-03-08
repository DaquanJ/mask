import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const DoughnutChart = () => {

    const [currentData, setcurrentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                setcurrentData(res.data)
                console.log(res.data);
            } catch (e) {
                console.error(e)
            }
        }

        fetchData();
    }, [])

    return (
        <div>

        </div>
    );
}

export default DoughnutChart;