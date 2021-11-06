import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
//import axios from 'axios'

class App extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const formData = new FormData()
    formData.append('image', this.state.selectedFile, this.state.selectedFile.name)
    //axios.post('insertLinkHere', formData) it seems I'd sent my regular post requests from here;
  }
  
  render() {
    return (
      <div className="App">
        <input type="file"  onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }

}

export default App;
