import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './routes/home/index';
// import ImagePostForm from './routes/home/components/postimage';
import ImageFormView from './routes/home/components/imageformView';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Home} />
        <Route path="/form" component={ImageFormView} />
      </React.Fragment>
    );
  }
}

export default App;
