import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import { auth } from "./firebase";

import ReactGA from "react-ga";
import "core-js"; // TODO what is this?

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import NavBar from "./components/NavBar";
import Router from "./Router";
import SEO from "./components/SEO";
import Theme from "./Theme";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginBottom: 0,
    marginRight: "auto",
    padding: 0,
    maxWidth: 1024,
    [theme.breakpoints.up("xs")]: {
      paddingRight: 0,
      paddingLeft: 0
    },
    [theme.breakpoints.up("sm")]: {
      paddingRight: 20,
      paddingLeft: 20
    }
  }
}));

function App(props) {
  const classes = useStyles(props);

  const [user, setUser] = useState(null);
  const [subscriptionLevel, setSubscriptionLevel] = useState(null);

  firebase.auth().onAuthStateChanged(handleAuthChange);
  function handleAuthChange(user) {
    if (user) {
      auth.getUserData().then(val => setSubscriptionLevel(val));
    } else {
      setSubscriptionLevel(null);
    }
    setUser(user);
  }

  function signout() {
    auth.signOut();
    setUser(null);
    setSubscriptionLevel(null);
  }

  if (window && window.location.href.includes("pronounceweb.com")) {
    ReactGA.initialize("UA-122566851-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <BrowserRouter>
      <div className="outer">
        <CssBaseline />
        <ThemeProvider theme={Theme}>
          <div className={classes.root}>
            <SEO />
            <NavBar user={user} signout={signout} />
            <Router user={user} subscriptionLevel={subscriptionLevel} />
          </div>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default withTheme(App);
