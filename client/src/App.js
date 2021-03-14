import './App.css';
import Countries from './components/countries';

import LineChart from './components/lineChart';
import LiveData from './components/LiveData';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/country';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/:country' exact component={Country} />
          <div>
            <div className='header'>
              <h1> Mask </h1>
              <Countries />
            </div>
            <LiveData />
            <LineChart />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
