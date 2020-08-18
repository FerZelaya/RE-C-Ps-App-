import React, {Component} from 'react';
import {Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import PRoute from './components/utilities/privateroutes'
import NRoute from './components/utilities/normalroutes'
import {setJWT, getLocalStorage, setLocalStorage, removeLocalStorage} from './components/utilities/axios'
import './App.css';

import {CircularProgress, Grid} from '@material-ui/core'

import Home from './components/Content/Home/index'
import Login from './components/Content/Login/index'
import SignOut from './components/Content/SignOut/index'
import Profile from './components/Content/Profile/index'
import PostRecipe from './components/Content/Profile/postRecipe'
import RecipeInfo from './components/Content/RecipeInfo/index'

export default class extends Component{
  constructor(){
    super()
    this.state = {
      user: getLocalStorage('user') || {},
      jwt: getLocalStorage('jwt') || "",
      isLogged: false,
      loadingBackend: false
    }

    if(this.state.jwt !== ""){
      setJWT(this.state.jwt)
      this.state.isLogged = true
    }

    this.setLogin = this.setLogin.bind(this)
    this.setLoggout = this.setLoggout.bind(this)

  }

  componentDidMount(){
    this.setState({loadingBackend:true})
  }

  setLogin(user, jwt){
    this.setState({
      ...this.state,
      user:user,
      jwt:jwt,
      isLogged:true
    },
      ()=>{
        setLocalStorage('jwt',jwt)
        setLocalStorage('user',user)
        setJWT(jwt)
      }
    )
  }


  setLoggout(){
    if(this.state.loadingBackend){
      this.setState(
        {
          ...this.state,
          user:"",
          jwt:"",
          isLogged:false
        },
          ()=>{
            removeLocalStorage('jwt')
            removeLocalStorage('user')
            setJWT('')
          }
        )
    } else {
      this.setState({
        ...this.state,
        user:"",
        jwt:"",
        isLogged:false
      },
        setJWT('')
      )
    }
    
  }


  render(){
    if(!this.state.loadingBackend){
      return(
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <CircularProgress/>
          </Grid>
        </Grid>
      )
    }

    const auth = {
      isLogged: this.state.isLogged,
      login: this.setLogin,
      logout: this.setLoggout
    }

    return(
      <Router>
        <Switch>
          <NRoute path="/login" component={Login} exact auth={auth}/>
          <PRoute path="/signout" component={SignOut} exact auth={auth}/>
          <PRoute path="/" component={Home} exact auth={auth}/>
          <PRoute path="/profile" component={Profile} exact auth={auth}/>
          <PRoute path="/postRecipe" component={PostRecipe} exact auth={auth}/>
          <PRoute path="/recipeinfo/:recipeid" component={RecipeInfo} exact auth={auth}/>
        </Switch>
      </Router>
    )
  }
}
