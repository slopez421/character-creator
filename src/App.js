import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Races from './components/Races';
import Archetypes from './components/Archetypes';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
            <Route path="/races">
              <Races />
            </Route>
            <Route path="/archetypes">
              <Archetypes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
