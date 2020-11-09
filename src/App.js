import React, { Component } from 'react';
import Login from "./authenticate/Login"
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./Home";
import Register from './authenticate/Register';


class App extends Component { 
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/register" exact={true} component={Register}/>
          </Switch>
        </Router>
    </React.Fragment>
    )
  }
}

export default App
