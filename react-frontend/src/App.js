import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <header id="nmheader">
        <h1>Welcome to Notemad!</h1>
      </header>
      <div id="searchbar">
        <h2>Search for an artist:</h2>
      </div>
    </div>
    )
  };
}

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <p>My Token = {window.token}</p>
          <p>More writing</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/