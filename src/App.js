import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import User from "./components/users/User.js";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css"; // App.css is the global css file rendered in every page every component

// React.component class is a class that contains all the lifecycle methods and alll

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

// Traditionly we had:
// 1. stateless functional components
// 2. Class based where we would have state and lifecyle methods
// But using Hooks we can have states within functional Components

// // This lifecycle method is fired off just when the app loads or the component is mounted
// async componentDidMount() {
//   // .env.local is used for storing global variables
//   this.setState({ loading: true }); // To change the state data we have to do this way
//   // making a request to githib API and returns a promise
//   const res = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   this.setState({ users: res.data, loading: false });
// }

// We cannot return directly from a class so we need a method, a function within a class
// render is called a lifecycle method and runs at a certain point and is required in every class component

/* // this looks like html but in reality it is JSX(JS extension) // JSX
        need to have 1 parent element which is returned // Sometiimes we don't
        want our content to be wrapped around a parent element here div, so we
        use React.fragment // Its an element in terms of JSX but output won't
        show anything */

/*Props are properties that we can pass it to our components here title. Similar to creating a Navbar object and using the key 
        value pairs And all those coming under tha name props thats y this.props.title*/
