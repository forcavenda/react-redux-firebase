import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import TodoApp from './components/todo/todo';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoApp/>       
      </div>
    );
  }
}


