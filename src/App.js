import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="navigaion-bar">
            <NavLink exact activeClassName="active" to="/"> Home</NavLink>
            <NavLink  activeClassName="active" to="/login"> Log in </NavLink>
            <NavLink  activeClassName="active" to="/register"> Register</NavLink>
            <NavLink  activeClassName="active" to="/profile"> Profile </NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <PublicRoute  path="/login" component={Login}/>
              <PrivateRoute path="/profile" component={Profile}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


// profile
// login
// sign up