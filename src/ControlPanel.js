import React, { Component } from 'react';
import ControlButton from './ControlButton';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel">
        <div className="ControlPanel-row">
          <ControlButton value={7} />
          <ControlButton value={8} />
          <ControlButton value={9} />
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={4} />
          <ControlButton value={5} />
          <ControlButton value={6} />
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={1} />
          <ControlButton value={2} />
          <ControlButton value={3} />
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={'00'} />
          <ControlButton value={0} />
          <ControlButton value={'.'} />
        </div>
      </div>
    );
  }
}

export default ControlPanel;