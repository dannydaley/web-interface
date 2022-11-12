import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Login';
import Navbar from './components/navbar';
import mainPage from './components/mainPage';
import * as React from 'react'


function App() {
  return (
    // <div className="App" style={{backgroundColor: 'grey', minHeight: '100vh', minWidth: '100vw'}}>

    // {/* <LoginPage /> */}
    <div>
      <Navbar />
      <div>
      <mainPage />
      </div>
    </div>
    
    // </div>
  );
}

export default App;
