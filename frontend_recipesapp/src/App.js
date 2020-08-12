import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import PRoute from './components/utilities/privateroutes'
import NRoute from './components/utilities/normalroutes'
import './App.css';

import Home from './components/Content/Home/index'

export default class extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Router>
    )
  }
}
