import React from "react";
import { Link } from "react-router-dom";

class FriendForm extends React.Component {
  render() {
    return (
      <div className="friend-form">
        <h2>Add Friend</h2>
        <Link to="/">
          <button>Back to list</button>
        </Link>
        <form onSubmit={this.props.addFriend}>
          <input
            className="friend-name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            value={this.props.newFriend.name}
          />
          <input
            className="friend-age"
            type="text"
            name="age"
            placeholder="Age"
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            value={this.props.newFriend.age}
          />
          <input
            className="friend-email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={event =>
              this.props.changeHandler(event.target.name, event.target.value)
            }
            value={this.props.newFriend.email}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;