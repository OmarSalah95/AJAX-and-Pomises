import React, { Component } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
// Components
import FriendList from './Components/FriendList';
import FriendForm from './Components/FriendForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend:{
        name:'',
        age: 0,
        email: '',
      },
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
  
  searchPostsHandler = e => {
    this.setState({ [e.target.name]:(e.target.value)});
};

  render() {
    return (
      <div className="App">
        <Route 
          exact 
          path="/" 
          render={
            props => <FriendList 
              {...props} 
              friends={ this.state.friends} 
            />} 
        />
        <Route
          exact
          path="/addfriend"
          render={Props => (
            <FriendForm
              {...Props}
              newFriend={this.state.newFriend}
              changeHandler={this.changeHandler}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
