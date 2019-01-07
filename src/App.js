import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Method1Component from "./Method1";
import Method2Component from "./Method2";
import Method3Component from "./Method3";

class App extends Component {
  render() {
    return (
      <div>
         <h1> <strong>Welcome</strong> App.js compomnent </h1>
         <Method1Component />
         <Method2Component />
         <Method3Component />
      </div>
    );
  }
}

export default App;
