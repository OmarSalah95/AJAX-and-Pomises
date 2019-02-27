import React from 'react';
import { Link } from 'react-router-dom';


 const FriendList = props => {
  
    return (
      <div className="friend-list">
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
        <Link to='/addfriend'>
            <button>Add Friend</button>
        </Link>
      </div>
    );
}


export default FriendList;