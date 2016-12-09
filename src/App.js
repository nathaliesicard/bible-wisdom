import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactNotification from './components/react-notification'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h3>Implementation 3</h3>
        <ReactNotification />
      </div>
    );
  }
}

export default App;
