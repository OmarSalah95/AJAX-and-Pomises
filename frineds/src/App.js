import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
// Components
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };  
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
       .then(res => {
         console.log(res.data);
         this.setState({
           friends: res.data
         });
       })
       .catch(err => {
         console.log(err);
       });
  }
  

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
