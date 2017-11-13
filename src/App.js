import React, { Component } from 'react';
import Display from './Display';
import ControlPanel from './ControlPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display value={1} />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
