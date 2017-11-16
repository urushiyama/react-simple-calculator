import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import './Display.css';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <TextField
          className="Display-input"
          id="Display-input"
          type="text"
          disabled={true}
          value={this.props.value}
          inputStyle={{textAlign: 'right', color: 'black'}}
          hintStyle={{textAlign: 'right', width: '100%'}}
          floatingLabelStyle={{ textAlign: 'center', width: '100%', transformOrigin: 'center top 0px' }}
          fullWidth={true} />
      </div>
    );
  }
}

export default Display;