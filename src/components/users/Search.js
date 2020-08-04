import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import { searchUsers } from "../../context/github/actions";
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from "../../context/types";

// Props are the properties that come from the parent component that called here App and with functions props are passed as parameter which i this case is destructured
// When we have a form in react we usually create a state for the input
const Search = () => {
  const { dispatch, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  // initial state using hooks and the way it works is,
  // we destructure it and pull out text and then we create a method to change the state which is setText (set<name of state key>)
  const [text, setText] = useState(""); // Initial value

  // If we dont use arrow functions then we have to explicitlt bind the object to this class
  // ie {this.onSubmit.bind(this)}
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a user", "light");
    } else {
      // We have to pass this.state.text to the app level component(passing props up the component hierarchy)
      // this refers here to the App object called by the App component so searchUsers is one of the functions expecting the text entered
      // that comes under the category of props
      // So this fucnctions comes under the app
      dispatch({ type: SET_LOADING });
      searchUsers(text).then((users) => {
        dispatch({ type: SEARCH_USERS, payload: users });
        setText("");
      });
    }
  };

  // We want to set the state to be whatever we type so that the value of inpu text field changes
  // This is done because when we have multiple input boxes then for each of them we would require an onchange listrner
  // By this we can do in here only
  // Since this is no longer a class we need to have const keyword to have function inside function
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={() => dispatch({ type: CLEAR_USERS })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

// useState is used to provide states in functional components
