import './App.css';
import Home from './components/Home';
import Races from './components/Races';

function App() {
  return (
    <div>
        <h2>Nav Bar:  <p>Home | Races | Archetypes</p></h2>
        <Races />
        <Home />
    </div>
  );
}

export default App;
