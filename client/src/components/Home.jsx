import React from 'react';
import ChartData from './ChartData';
import LiveData from './LiveData';

const Home = () => {
    return (
        <div>
            <LiveData />
            <ChartData />
        </div>
    );
}

export default Home;