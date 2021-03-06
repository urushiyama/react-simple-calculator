import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import './ControlButton.css';

class ControlButton extends Component {
  render() {
    return (
      <div className="ControlButton">
        <FlatButton
          className="ControlButton-button"
          label={this.props.value}
          style={{width: '100%'}}
          primary={this.props.primary}
          secondary={this.props.secondary}
          onClick={() => this.props.onClick()}
        />
      </div>
    );
  }
}

export default ControlButton;