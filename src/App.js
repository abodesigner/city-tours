import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome City Tours [App Component]</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
