import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  // Global state for anything that has to do with github (Same type of thing we did in the app.js)
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // All these actions end with a dispatch to the user that is responsible for changing the state

  // set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // Basically have to wrap our entire applicaiton with provider and the value cantain those things which are available Globally
  // Anything that we want to be available to our entire app
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
