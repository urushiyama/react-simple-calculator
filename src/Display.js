import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <input className="Display-input" type="number" readOnly="readOnly" value={this.props.value} />
      </div>
    );
  }
}

export default Display;