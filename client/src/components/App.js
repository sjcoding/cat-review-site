import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";

import CatList from "./CatList";
import NewCatForm from "./NewCatForm";
import RatingButton from "./RatingButton";
import UserTest from "./UserTest";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/" component={CatList} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/add-new-cat" component={NewCatForm} />
        <Route exact path="/review-button" component={RatingButton} />
        <AuthenticatedRoute exact path="/user-test" component={UserTest} user={currentUser} />
      </Switch>
    </Router>
  );
};

export default hot(App);
