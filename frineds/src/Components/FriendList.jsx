import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
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
      <div className="friend-list">
        {this.state.friends.map(friend => (
          <Link
            key={friend.id}
            exact
            to={`/friend/${friend.name}`}
            activeClassName="active"
          >
            <FriendCard friend={friend} />
          </Link>
        ))}
      </div>
    );
}
}