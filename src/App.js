import React from 'react';
import './App.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import User from './pages/user'

function App() {
  return (
    <div className="App">
      {/* start */}
        <BrowserRouter>
          <Link to="/">Home</Link>
          |
          <Link to="/user">User</Link>
          |
          <Link to="/user/new">User New</Link>
          <br />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" >
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
      {/* end */}
    </div>
  );
}

export default App;
