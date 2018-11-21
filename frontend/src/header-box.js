import React, { Component } from 'react';

class HeaderBox extends Component {
  render() {
    return(
      <header>
        <div id="left-angle" className="angle"></div>
        <div id="logo">Url shortener</div>
        <div id="right-angle" className="angle"></div>
      </header>
    );
  }
}

export default HeaderBox;
