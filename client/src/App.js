import React, { Component } from 'react';

//Import Statements for  stylesheets //
import './styles/App.css';
import './styles/hikes.css';
import './styles/user-profile.css';
import './styles/alerts.css';
// import 'bootstrap/dist/css/bootstrap.css';


//Import Statement for main pages // 
import Register from './containers/UserRegistration/Signup.js';
import Login from './containers/UserRegistration/Login';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import Navbar from './containers/Navbar';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from './helpers/PrivateRoute';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar logged_in={ this.props.logged_in } currentUser={ this.props.currentUser } />
            <Switch>
              <Route exact path="/" render={ routerProps => <Home {...routerProps} fetchCurrentUser= { this.props.fetchCurrentUser } /> } />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Register} />
              <Route path="/logout" render={ props => {
                this.props.logout()
                return <Redirect to = '/' />
              }} />

              <PrivateRoute exact path="/:username" component={User} token={ this.props.token} currentUser={ this.props.currentUser } />

              <Route render={() => <h2 class="400-error">404 Error - Page not found</h2>} />
              
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App;