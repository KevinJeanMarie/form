import React, { Component } from 'react';

class Input extends Component {
  render() {

    const { type, onChange } = this.props

    return (
      <>
        <input type={type} onChange={onChange} />
      </>
    );
  }
}

export default Input; 