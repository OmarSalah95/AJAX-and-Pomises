import React from 'react';

const FriendCard = props => {
  const {name, age, email } = props.friend;
  return (
    <div className="friend-card">
      <h2>{name}</h2>
      <div className="age">
        age: <em>{age}</em>
      </div>
      <div className="email">
        email: <strong>{email}</strong>
      </div>
    </div>
  );
};


export default FriendCard;