import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from './FriendForm';

 const FriendList = props => {
  
    return (

      <div className="friend-list">

      <h1>Lambda Friends</h1>
        <Link to='/addfriend'>
            <button>Add Friend</button>
        </Link>
        {props.friends.map(friend => (
         <div className="friend-card">
            <h2>{friend.name}</h2>
            <div className="age">
                age: <em>{friend.age}</em>
            </div>
            <div className="email">
                email: <strong>{friend.email}</strong>
            </div>
        </div>
        ))}

      </div>
    );
}


export default FriendList;