import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import { getUserAndRepos } from "../../context/github/actions";
import { GET_USER_AND_REPOS, SET_LOADING } from "../../context/types";

const User = ({ match: { params } }) => {
  const {
    user: {
      name,
      avatar_url,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_gists,
      public_repos,
      hireable,
      blog,
      company,
    },
    loading,
    dispatch,
    repos,
  } = useContext(GithubContext);

  // Alernative of the  componentDidMount()
  // useEffect can be used for different things and mimic difffernt behaviours
  // It updates on any update and when we run getUser and getUserRepo it is updating the component, so constantly runs in a loop
  // to stop that we add [] and there we can add special conditions when we want this to run
  // Here we only want this to run only once, so to mimic componentDidMount() [] is added
  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getUserAndRepos(params.login).then((res) =>
      dispatch({ type: GET_USER_AND_REPOS, payload: res })
    );
  }, [dispatch, params.login]);

  // This is a lifecycle methid that fires off right away when this component is loaded
  // componentDidMount() {
  //   this.props.getUser(match.params.login);
  //   this.props.getUserRepos(match.params.login);
  // }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-centre">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: {login} </strong>
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>
                    Website: <a href={`https://${blog}`}>{blog}</a>{" "}
                  </strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="car text-centre">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;

// useEffext hook from the react module is used to get the saame effect as the componentDidMount() in the functional component
// So that that functionality os Executed as soon the component is mounted or loaded
