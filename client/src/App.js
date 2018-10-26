import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routes/home/index';
import ImagePostForm from './routes/home/components/postimage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Home}/>
        <Route path="/form" component={ImagePostForm}/>
        </React.Fragment>
        );
  }
}

export default App;
