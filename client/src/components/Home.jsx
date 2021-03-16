import React from 'react';
import ChartData from './ChartData';
import Countries from './countries';
import LiveData from './LiveData';

const Home = () => {
    return (
        <div>
            <h1> Mask </h1>
            <Countries />
            <LiveData />
            <ChartData />
        </div>
    );
}

export default Home;