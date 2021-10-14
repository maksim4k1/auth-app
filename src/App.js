import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import Book from './components/Book';
import { connect } from 'react-redux';

function App({isAuth}) {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="navigaion-bar">
            <NavLink exact activeClassName="active" to="/"> Home</NavLink>
            {
              isAuth
              ? <>
                <NavLink  activeClassName="active" to="/profile"> Profile </NavLink>
              </>
              : <>
                <NavLink  activeClassName="active" to="/login"> Log in </NavLink>
                <NavLink  activeClassName="active" to="/register"> Register</NavLink>
              </>
            }
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <PublicRoute  path="/login" component={Login}/>
              <PublicRoute  path="/register" component={Signup}/>
              <PrivateRoute path="/profile" component={Profile}/>
              <PrivateRoute path="/book/:id" component={Book}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

const stateToProps = (state) => ({
  isAuth: state.user.isAuth
});

export default connect(stateToProps)(App);


// profile
// login
// sign up