import React, { Component } from 'react';

class Input extends Component {
  render() {
    let options = {
      type: 'text',
      placeholder: 'Paste URL here',
      value: this.props.url,
    };
    if (this.props.readOnly) {
      options['readOnly'] = true
    } else {
      options['onChange'] = this.props.onChange
    }
    return(<input {...options} />);
  }
}

export default Input;
