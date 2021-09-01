import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Badge from './Component/BadgeComponent/Badge';
import Home from './Component/Home';
import Social from './Component/SocialComponent/Social';
import Stat from './Component/Stat';
import Navbar from './Permanent/Navbar';
import './scss/style.css';

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stat">
            <Stat />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/badge">
            <Badge/>
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
