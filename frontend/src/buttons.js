import React, { Component } from 'react';

function Button(props) {
  let options = {
    onClick: props.onClick,
  };
  if (props['id']) options['id'] = props['id'];
  return(
    <button {...options} >
      {props.value}
    </button>
  );
}

class ShortenButton extends Component {
  render() {
    return(
      <Button
        value='SHORTEN'
        onClick={this.props.onClick}
      />
    );
  }
}

class CopyButton extends Component {
  render() {
    return(
      <Button
        value='COPY'
        onClick={this.props.onClick}
      />
    );
  }
}

class ResetButton extends Component {
  render() {
    return(
      <Button
        id='reset-button'
        value='X'
        onClick={this.props.onClick}
      />
    );
  }
}

export { Button as default, ShortenButton, CopyButton, ResetButton };
