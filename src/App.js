import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  fileSelectedHandler = event => {
    console.log(event.target)
  }
  
  render() {
    return (
      <div className="App">
        <input type="file"  onChange={this.fileSelectedHandler}/>
      </div>
    );
  }

}

export default App;
