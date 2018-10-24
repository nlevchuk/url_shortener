import React, { Component } from 'react';
import HeaderBox from './header-box';
import MainBox from './main-box';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderBox />
        <MainBox />
      </div>
    );
  }
}

export default App;
