import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { IProps } from "./../@types/PronounceWeb";

import FourOhFour from "./pages/404";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Sound from "./pages/Sound";
import Profile from "./pages/Profile";

export default (props: IProps) => {
  const [subscriptionLevel, setSubscriptionLevel] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setSubscriptionLevel(props.subscriptionLevel);
    setUser(props.user);
  });

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route
        exact
        path="/login"
        render={props => <Login user={user} {...props} />}
      />
      <Route
        exact
        path="/profile"
        render={props => <Profile user={user} {...props} />}
      />
      <Route
        path="/sound/:phoneme/:activity?"
        render={props => (
          <Sound subscriptionLevel={subscriptionLevel} {...props} />
        )}
      />
      <Route
        path="/sound/:phoneme"
        render={props => (
          <Sound subscriptionLevel={subscriptionLevel} {...props} />
        )}
      />
      <Route default component={FourOhFour} />
    </Switch>
  );
};
