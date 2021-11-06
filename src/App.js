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
    fetch('localhost:3000/uploads', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accep:" : "application/json" 
      }, body: JSON.stringify({
        image: `${formData}`
      })
    })
    .then(res => res.json())
    .then(res => console.log(res)
    you need to create routes in ruby and generate resource for image uploads)
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
