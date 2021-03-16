import React from 'react';

import '../styles/Home.css';

import ChartData from './ChartData';
import Countries from './countries';
import LiveData from './LiveData';

const Home = () => {
    return (
        <div className='Home'>
            <div className='header'>
                <h1> Mask </h1>
                <Countries />
            </div>
            <LiveData />
            <ChartData />
        </div>
    );
}

export default Home;