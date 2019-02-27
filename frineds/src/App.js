import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
// Components
import FriendList from './Components/FriendList';
import FriendCard from './Components/FriendCard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      SearchValue: '',
    };  
  }

  componentDidMount() {
    axios     
    .get(`http://localhost:5000/friends`)
       .then(res => {
        //  console.log(res.data);
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
        <Route exact path="/" render={props => <FriendList {...props} friends={ this.state.friends} />} />
        <Route
          exact
          path="/friends/:name"
          render={props => (<FriendCard {...props}  />)}
        />
      </div>
    );
  }
}

export default App;
