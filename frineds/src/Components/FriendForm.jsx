import React from "react";
import { Link } from "react-router-dom";

class FriendForm extends React.Component {
  render() {
    return (
      <div className="friend-form">
        <h2>Made a new friend?</h2>
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
        <Link to="/">
          <button>Back to list</button>
        </Link>
      </div>
    );
  }
}

export default FriendForm;