import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// in case of functional components props are not refered as this.props instead props are passed as parameter to function
// Destructuring in the parameter itself
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // Adding state to this component using a constructor, which just a function that runs when the component loads
  // Constructor requies a super() method to call the parent class contructor

  // Destructuring ie pulling stuff out from the object
  // With this we don't have to write this.state every time we require a key from the state js object

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  // An object of a specific user is required so that we can create its card
  user: PropTypes.object.isRequired,
};

export default UserItem;
