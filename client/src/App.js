import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Country from './components/country';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch >
          <Route path='/' exact component={Home} />
          <Route path='/:country' component={Country} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
