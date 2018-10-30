import React, { Component } from 'react';
import Header from './header';
import Context from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Context />
      </div>
    );
  }
}

export default App;
