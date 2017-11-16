import React, { Component } from 'react';
import ControlButton from './ControlButton';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel">
        <div className="ControlPanel-row">
          <ControlButton value={'7'} onClick={() => this.props.onClick('7')} />
          <ControlButton value={'8'} onClick={() => this.props.onClick('8')} />
          <ControlButton value={'9'} onClick={() => this.props.onClick('9')} />
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={'4'} onClick={() => this.props.onClick('4')} />
          <ControlButton value={'5'} onClick={() => this.props.onClick('5')} />
          <ControlButton value={'6'} onClick={() => this.props.onClick('6')} />
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={'1'} onClick={() => this.props.onClick('1')} />
          <ControlButton value={'2'} onClick={() => this.props.onClick('2')}/>
          <ControlButton value={'3'} onClick={() => this.props.onClick('3')}/>
        </div>
        <div className="ControlPanel-row">
          <ControlButton value={'00'} onClick={() => this.props.onClick('00')} />
          <ControlButton value={'0'} onClick={() => this.props.onClick('0')} />
          <ControlButton value={'.'} onClick={() => this.props.onClick('.')} />
        </div>
      </div>
    );
  }
}

export default ControlPanel;