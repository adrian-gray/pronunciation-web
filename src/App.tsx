import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import { auth } from "./firebase";

import ReactGA from "react-ga";

import Container from "react-bootstrap/Container";

import NavBar from "./components/NavBar";
import Router from "./Router";
import SEO from "./components/SEO";

export default props => {
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
      <Container>
        <Container>
          <SEO />
          <NavBar user={user} signout={signout} />
          <Router user={user} subscriptionLevel={subscriptionLevel} />
        </Container>
      </Container>
    </BrowserRouter>
  );
};
