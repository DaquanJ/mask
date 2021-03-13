import './App.css';
import Countries from './components/countries';

import LineChart from './components/lineChart';
import LiveData from './components/LiveData';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <h1> Mask </h1>
      <LiveData />
      <Countries />
      <LineChart />
    </div>
  );
}

export default App;
