import './App.css';
import Countries from './components/countries';

import LineChart from './components/lineChart';
import LiveData from './components/LiveData';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Country from './components/country';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/:country' component={Country} />
        <h1> Mask </h1>
        <LiveData />
        <Countries />
        <LineChart />
      </Router>
    </div>
  );
}

export default App;
