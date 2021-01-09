
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import CountryDetel from './components/CountryDetel/CountryDetel';

function App() {
  return (
    <div >
    <Router>
      <Switch>
        <Route exact path='/'>
        <Home/>

        </Route>
        <Route path='/home'>
        <Home/>

        </Route>
        <Route path='/name/:name'>
        <CountryDetel/>

        
        </Route>

        <Route path='*'>
        <Nomatch/>

        </Route>
        
      </Switch>
    </Router>
    
     
    </div>
  );
}

export default App;
