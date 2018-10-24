import React, { Component } from 'react';
import Input from './input';
import { ShortenButton, CopyButton, ResetButton } from './buttons';

class OriginalLink extends Component {
  render() {
    return(
      <div id="original-link" className="row">
        <div>
          <a href={this.props.href}>
            {this.props.href}
          </a>
        </div>
        <span>shortening</span>
      </div>
    );
  }
}

class MainBox extends Component {
  constructor(props) {
    super(props);
    this.shortUrl = this.shortUrl.bind(this);
    this.copyUrl = this.copyUrl.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.resetAll = this.resetAll.bind(this);

    this.state = {
      url: '',
      originalUrl: '',
      isShortend: false,
      isCopied: false,
    };
  }

  shortUrl() {
    const originalUrl = this.state.url;
    if (originalUrl === '') {
      alert('Paste URL!');
      return;
    }

    // send to server JSON and fetch response
    const newUrl = 'blahblah';
    this.setState({
      isShortend: true,
      originalUrl: originalUrl,
      url: newUrl,
    });
  }

  copyUrl() {
    // use third party lib for copy to clipboard
    this.setState({
      isCopied: true
    });
    alert('Copied');
  }

  changeInput(event) {
    this.setState({
      url: event.target.value,
    });
  }

  resetAll() {
    this.setState({
      url: '',
      originalUrl: '',
      isShortend: false,
      isCopied: false,
    });
  }

  render() {
    let mainButton, originalLink, resetButton;
    if (this.state.isShortend) {
      mainButton = <CopyButton onClick={this.copyUrl} />;
      resetButton = <ResetButton onClick={this.resetAll} />;
      originalLink = <OriginalLink href={this.state.originalUrl} />;
    } else {
      mainButton = <ShortenButton onClick={this.shortUrl} />;
    }

    return (
      <main>
        <div id="container">
          <div id="form-container" className="row">
            <div id="input-item">
              <Input
                url={this.state.url}
                onChange={this.changeInput}
                readOnly={this.state.isShortend}
              />
              {resetButton}
            </div>
            <div id="button-item">
              {mainButton}
            </div>
          </div>
          {originalLink}
        </div>
      </main>
    );
  }
}

export { MainBox as default, OriginalLink };
