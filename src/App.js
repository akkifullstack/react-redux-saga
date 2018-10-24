import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routes/home/index'

class App extends Component {
  render() {
    return (
      <Route path="/" component={Home}/>
    );
  }
}

export default App;
