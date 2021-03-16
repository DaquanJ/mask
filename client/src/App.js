import './App.css';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
