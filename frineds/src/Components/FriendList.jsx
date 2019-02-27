import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import FriendCard from './FriendCard';

 const FriendList = props => {
  
    return (
      <div className="friend-list">
        {props.friends.map(friend => (
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


export default FriendList;