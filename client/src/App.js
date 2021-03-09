import './App.css';

import LineChart from './components/lineChart';
import LiveData from './components/LiveData';

function App() {
  return (
    <div className='App'>
      <h1> Covid-19 Tracker </h1>
      <LiveData />
      <LineChart />
    </div>
  );
}

export default App;
