import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./../firebase";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  page: theme.page,
  headspace: theme.headspace,
  personalSpace: theme.personalSpace,
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

function Login(props) {
  const classes = useStyles(props);

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

  const handleChange = property => {
    return e => {
      switch (property) {
        case "signupName":
          setSignupName(e.target.value);
          break;
        case "signupEmail":
          setSignupEmail(e.target.value);
          break;
        case "signinEmail":
          setSigninEmail(e.target.value);
          break;
        case "signupPassword":
          setSignupPassword(e.target.value);
          break;
        case "signinPassword":
          setSigninPassword(e.target.value);
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
    <Paper className={classes.page}>
      {redirectToHome ? <Redirect to="/home" /> : null}
      <div>
        <Paper className={classes.personalSpace}>
          <Button
            onClick={auth.handleGoogleLogin}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {`Login with Google`}
          </Button>
        </Paper>
      </div>
      <div>
        <Paper className={classes.personalSpace}>
          <Typography className={classes.headSpace} gutterBottom>
            {`Sign in with email`}
          </Typography>
          <form>
            <TextField
              id="signin_email"
              label="Your email"
              className="form-control"
              value={signinEmail}
              onChange={handleChange("signinEmail")}
              margin="normal"
              autoComplete="username"
            />
            <TextField
              id="signin_password"
              label="Password"
              className="form-control"
              type="password"
              value={signinPassword}
              onChange={handleChange("signinPassword")}
              margin="normal"
              autoComplete="current-password"
            />
            <Button onClick={signIn} variant="contained">
              {"Sign in"}
            </Button>
          </form>
        </Paper>
        <Divider />
      </div>
      <Paper className={classes.personalSpace}>
        <Typography className={classes.headspace} gutterBottom>
          {`Or, sign up with email `}
        </Typography>
        <form>
          <TextField
            id="signup_name"
            label="Your name"
            className="form-control"
            value={signupName}
            onChange={handleChange("signupName")}
            margin="normal"
          />
          <TextField
            id="signup_email"
            label="Your email"
            className="form-control"
            value={signupEmail}
            onChange={handleChange("signupEmail")}
            margin="normal"
            autoComplete="username"
          />
          <TextField
            autoComplete="current-password"
            id="signup_password"
            label="Password"
            className="form-control"
            type="password"
            value={signupPassword}
            onChange={handleChange("signupPassword")}
            margin="normal"
          />
          <Button onClick={signUp} variant="contained">
            {"Sign up"}
          </Button>
        </form>
      </Paper>
    </Paper>
  );
}

export default withTheme(Login);
