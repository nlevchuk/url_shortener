import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div id="left-angle" className="angle"></div>
          <div id="logo">shortencrafts.io</div>
          <div id="right-angle" className="angle"></div>
        </header>
        <main>
          <div id="container">
            <div id="form-container" className="row">
              <form>
                <div id="input-item">
                  <input placeholder="Paste URL here"></input>
                </div>
                <div id="button-item">
                  <button>SHORTEN</button>
                </div>
              </form>
            </div>
            <div id="link-container" className="row">
              <div><a href="#">Ooops!</a></div>
              <span>Something went wrong</span>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
