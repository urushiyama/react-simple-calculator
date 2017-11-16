import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Display from './Display';
import ControlPanel from './ControlPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      valueAsString: '0',
      inputDemical: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(label) {
    var newValueAsString = this.state.valueAsString;
    var newValue = this.state.value;
    var newInputDemical = this.state.inputDemical;
    switch (true) {
      case /^00$/.test(label):
        console.log('input two 00');
        if (this.state.valueAsString !== '0') {
          newValueAsString += '00';
        }
        break;
      case /^\.$/.test(label):
        console.log('into decimal input mode');
        if (!this.state.inputDemical) {
          newValueAsString  += '.';
          newInputDemical = true;
        }
        break;
      case /^[0-9]$/.test(label):
        console.log('input number '+label);
        if (this.state.valueAsString === '0') {
          newValueAsString = label;
        } else {
          newValueAsString += label;
        }
        break;
      default:
        
    }
    newValue = Number.parseFloat(newValueAsString);
    console.log('new value: '+newValue);
    this.setState({
      value: newValue,
      valueAsString: newValueAsString,
      inputDemical: newInputDemical,
    });
  }
  
  render() {
    const value = this.state.valueAsString;
    return (
      <MuiThemeProvider>
      <div className="App">
        <Display value={value}></Display>
        <ControlPanel onClick={this.handleClick}/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
