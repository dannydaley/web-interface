import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import Navbar from './components/navbar';
import React , { Component } from "react";
import MainPage from './components/mainPage';
import SignUpForm from './components/signUp';
import { Routes, Route} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      userFirstName: '',
      userLastName: '',
      loggedInUsername: '',
      userProfilePicture: '',
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
      fetch('http://localhost:3001' + '/signout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
             sender: this.props.loggedInUsername
        }) 
      })    
      this.setState({route: 'signin'})  
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return (
     
      <div className="App" style={{backgroundColor: 'grey', minHeight: '100vh'}}>
        { this.state.isSignedIn === true ? <MainPage onRouteChange={this.onRouteChange}/> : <LoginPage onRouteChange={this.onRouteChange} route={this.state.route}/> }
      </div>
    );
  }
}
