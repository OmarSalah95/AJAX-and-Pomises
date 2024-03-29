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
        age: '',
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

  addFriend = event => {
    event.preventDefault();;
      this.setState({
        newFriend: {
          ...this.state.newFriend,
          id: this.state.friends.length + 1
        }
      });

      axios
        .post('http://localhost:5000/friends', this.state.newFriend)
        .then(res => this.setState({friends:res.data}))
        .catch(err => console.log(err))

      this.setState({
        newFriend: {
          name: "",
          age: "",
          email: ""
        }
      });
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
    
  }

  changeHandler = (key, value) => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [key]: value
      }
    });
    
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
