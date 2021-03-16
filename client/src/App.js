import './App.css';
import Countries from './components/countries';

import LineChart from './components/ChartData';
import LiveData from './components/LiveData';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Country from './components/country';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:country' component={Country} />
          <div>
            <div className='header'>
              <h1> Mask </h1>
              <Countries />
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
