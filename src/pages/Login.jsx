import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./../firebase";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  page: theme.page,
  headspace: theme.headspace,
  personalSpace: theme.personalSpace,
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupName: "",
      signupEmail: "",
      signinEmail: "",
      signupPassword: "",
      signinPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleChange(name) {
    return e => {
      this.setState({
        [name]: e.target.value
      });
    };
  }

  signUp() {
    auth.signUpWithEmail({
      name: this.state.signupName,
      email: this.state.signupEmail,
      password: this.state.signupPassword
    });
  }

  signIn() {
    auth.signInWithEmail({
      email: this.state.signinEmail,
      password: this.state.signinPassword
    });
  }

  render() {
    const { classes, user } = this.props;
    if (user) {
      return <Redirect to="/home" />;
    }

    return (
      <Paper className={classes.page}>
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
                value={this.state.signinEmail}
                onChange={this.handleChange("signinEmail")}
                margin="normal"
              />
              <TextField
                id="signin_password"
                label="Password"
                className="form-control"
                type="password"
                value={this.state.signinPassword}
                onChange={this.handleChange("signinPassword")}
                margin="normal"
              />
              <Button onClick={this.signIn} variant="raised">
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
              value={this.state.signupName}
              onChange={this.handleChange("signupName")}
              margin="normal"
            />
            <TextField
              id="signup_email"
              label="Your email"
              className="form-control"
              value={this.state.signupEmail}
              onChange={this.handleChange("signupEmail")}
              margin="normal"
            />
            <TextField
              id="signup_password"
              label="Password"
              className="form-control"
              type="password"
              value={this.state.signupPassword}
              onChange={this.handleChange("signupPassword")}
              margin="normal"
            />
            <Button onClick={this.signUp} variant="raised">
              {"Sign up"}
            </Button>
          </form>
        </Paper>
      </Paper>
    );
  }
}

export default withStyles(styles)(Login);
