import React, { useState } from "react";
import firebase from "firebase/app";
import ReactGA from "react-ga";
import "core-js";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";

import { auth } from "./firebase";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Router from "./Router";
import SEO from "./components/SEO";
import Theme from "./Theme";

const classes = makeStyles(theme => ({
  root: {
    marginTop: 0,
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

export default function App() {
  const [user, setUser] = useState(null);
  const [subscriptionLevel, setSubscriptionLevel] = useState(null);

  function initFirebaseAuth() {
    firebase.auth().onAuthStateChanged(handleAuthChange);
  }

  function handleAuthChange(user) {
    if (user) {
      auth.getUserData().then(val => {
        setSubscriptionLevel(val);
      });
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

  initFirebaseAuth();

  // return (
  //   <BrowserRouter>
  //     <div>
  //       <CssBaseline />
  //       <ThemeProvider theme={Theme}>
  //         <div className={classes.root}>
  //           <SEO />
  //           <NavBar user={this.state.user} signout={this.signout} />
  //           <Router
  //             user={this.state.user}
  //             subscriptionLevel={this.state.subscriptionLevel}
  //           />
  //         </div>
  //       </ThemeProvider>
  //     </div>
  //   </BrowserRouter>
  // );

  return (
    <BrowserRouter>
      <div>
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
