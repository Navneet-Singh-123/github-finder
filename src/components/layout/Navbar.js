import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // This is used because after searching for a user when we press about then home again the users searched get out and we'll have to search them again. ie the sate remains intact because the links get refreshed by using a tag

// In case of functional component props are passed as parameter
// In case of destructuring from the props it is assumed by default that we are destructuring from it so no need to specify the key props:
const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// If the props are not passed, it wnon't show anything so need to define some default props
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// declaring propTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // We are not getting an error even after not passing the prop coz the default props are being used
  icon: PropTypes.string.isRequired,
};

export default Navbar;
