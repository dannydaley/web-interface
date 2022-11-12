import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import Navbar from './components/navbar';
import React , { Component } from "react";
import MainPage from './components/mainPage';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      userFirstName: '',
      userLastName: '',
      loggedInUsername: '',
      userProfilePicture: '',
      route: ''
    }
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: 'grey', minHeight: '100vh'}}>
      <MainPage />    
      {/* <MainPage /> */}
      </div>
    );
  }

}
