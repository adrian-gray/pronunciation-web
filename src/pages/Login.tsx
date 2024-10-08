import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./../firebase";

import { IUser } from "./../../@types/PronounceWeb";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import GoogleSigninButton from "./../components/GoogleSigninButton";

export default (props: { user: IUser }) => {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  useEffect(() => {
    if (props.user) {
      setRedirectToHome(true);
    }
  });

  const handleChange = (property: string) => {
    return (e: React.FormEvent) => {
      const element = e.target as HTMLInputElement;
      const value = element.value;
      switch (property) {
        case "signupName":
          setSignupName(value);
          break;
        case "signupEmail":
          setSignupEmail(value);
          break;
        case "signinEmail":
          setSigninEmail(value);
          break;
        case "signupPassword":
          setSignupPassword(value);
          break;
        case "signinPassword":
          setSigninPassword(value);
          break;
        default:
          console.log(`Erm. what's a ${property}?`);
      }
    };
  };

  const signUp = () => {
    auth.signUpWithEmail({
      name: signupName,
      email: signupEmail,
      password: signupPassword
    });
  };

  const signIn = () => {
    auth.signInWithEmail({
      email: signinEmail,
      password: signinPassword
    });
  };

  return (
    <div className="headspace">
      {redirectToHome ? <Redirect to="/home" /> : null}
      <div className="personal-space">
        <GoogleSigninButton />
      </div>
      <div>
        <div className="personal-space">
          <p className="head-space">{`Sign in with email`}</p>
          <Form>
            <Form.Row>
              <Form.Label>Your email</Form.Label>
              <Form.Control
                id="signin_email"
                className="form-control form-bottom-space"
                value={signinEmail}
                onChange={handleChange("signinEmail")}
                autoComplete="username"
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="signin_password"
                className="form-control form-bottom-space"
                type="password"
                value={signinPassword}
                onChange={handleChange("signinPassword")}
                autoComplete="current-password"
              />
              <Button onClick={signIn}>{"Sign in"}</Button>
            </Form.Row>
          </Form>
        </div>
        <hr />
      </div>
      <div className="personal-space">
        <p className="head-space">{`Or, sign up with email `}</p>
        <Form>
          <Form.Row>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              id="signup_name"
              className="form-control form-bottom-space"
              value={signupName}
              onChange={handleChange("signupName")}
            />
          </Form.Row>
          <Form.Row>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              id="signup_email"
              className="form-control form-bottom-space"
              value={signupEmail}
              onChange={handleChange("signupEmail")}
              autoComplete="username"
            />
          </Form.Row>
          <Form.Row>
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="current-password"
              id="signup_password"
              className="form-control form-bottom-space"
              type="password"
              value={signupPassword}
              onChange={handleChange("signupPassword")}
            />
          </Form.Row>
          <Form.Row>
            <Button onClick={signUp}>{"Sign up"}</Button>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
};
