import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <TextField
          className="Display-input"
          id="Display-input"
          type="text"
          value={this.props.value}
          inputStyle={{textAlign: 'right'}}
          fullWidth={true}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Display;