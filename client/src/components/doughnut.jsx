import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Doughnut = () => {

    const [currentData, setcurrentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                setcurrentData(res.data)
                console.log(currentData);
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Doughnut Chart </h1>
        </div>
    );
}

export default Doughnut;