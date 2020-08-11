import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
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
