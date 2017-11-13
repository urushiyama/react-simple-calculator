import React, { Component } from 'react';
import './ControlButton.css';

class ControlButton extends Component {
  render() {
    return (
      <div className="ControlButton">
        <button className="ControlButton-button">
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default ControlButton;