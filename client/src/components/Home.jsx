import React from 'react';

import '../styles/Home.css';

import ChartData from './ChartData';
import LiveData from './LiveData';

const Home = () => {
    return (
        <div className='Home'>
            <LiveData />
            <ChartData />
        </div>
    );
}

export default Home;