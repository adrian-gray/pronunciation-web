import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./../firebase";

import { IUser } from "./../../@types/PronounceWeb";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      <div>
        <div className="personal-space">
          <Button variant="primary" onClick={auth.handleGoogleLogin}>
            {`Login with Google`}
          </Button>
        </div>
      </div>
      <div className="google-button">
        <div className="google-signin-wrapper">
          <div className="google-signin-button-icon">
            <div className="google-signin-button-image abcRioButtonSvgImageWithFallback abcRioButtonIconImage abcRioButtonIconImage18">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                viewBox="0 0 48 48"
                className="googleSvg"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <div className="google-button-contents">{"Sign in"}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="personal-space">
          <p className="head-space">{`Sign in with email`}</p>
          <Form>
            <Form.Row>
              <Form.Label>Your email</Form.Label>
              <Form.Control
                id="signin_email"
                className="form-control form-bottomspace"
                value={signinEmail}
                onChange={handleChange("signinEmail")}
                autoComplete="username"
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="signin_password"
                className="form-control form-bottomspace"
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
              className="form-control form-bottomspace"
              value={signupName}
              onChange={handleChange("signupName")}
            />
          </Form.Row>
          <Form.Row>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              id="signup_email"
              className="form-control form-bottomspace"
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
              className="form-control form-bottomspace"
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
