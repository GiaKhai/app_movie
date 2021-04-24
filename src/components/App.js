/** @format */

import "../App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
const App = () => {
  return (
    <Router>
      <header className="App-header">
        <nav className="style-3">
          <ul className="menu-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <SearchMovie />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
