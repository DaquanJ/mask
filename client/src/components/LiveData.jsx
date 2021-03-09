import axios from 'axios';
import React, { useState, useEffect } from 'react';


const LiveData = () => {

    const [liveData, setLiveData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://disease.sh/v3/covid-19/all')
                setLiveData(res.data)
                console.log(res.data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1> Live ! </h1>
        </div>
    );
}

export default LiveData;