import React from "react"; // Main library
import ReactDOM from "react-dom"; // Has to do with the rendering in the browser
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// <App /> is the main app component rendered in the div having as id of root
