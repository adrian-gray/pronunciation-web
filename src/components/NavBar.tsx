import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

export default props => {
  let homeLink = "/";
  let changeLoginStatus;

  if (props.user) {
    changeLoginStatus = (
      <Form inline>
        <Button variant="outline-info" onClick={props.signout} color="inherit">
          {"Sign Out"}
        </Button>
      </Form>
    );
    homeLink = "/home";
  } else {
    changeLoginStatus = (
      <Form inline>
        <Button href="/login" color="inherit">
          {"Sign In or Up"}
        </Button>
      </Form>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href={homeLink}>Pronounce Web</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>{changeLoginStatus}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
