import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20,
    container: {
      display: "flex",
      flexWrap: "wrap"
    }
  }
}));

function MailchimpForm(props) {
  const classes = useStyles(props);

  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = property => {
    return e => {
      switch (property) {
        case "name":
          setName(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        default:
          console.log(`Erm. what's a ${property}?`);
      }
    };
  };

  const submit = () => {
    setEmailError(null);
    setEmailErrorMsg("");
    setNameError(null);
    setNameErrorMsg("");

    if (!name) {
      setNameError(true);
      setNameErrorMsg("Oops, you forgot your name.");
      return;
    }

    if (!email) {
      setEmailError(true);
      setEmailErrorMsg("Oops, you forgot your email.");
      return;
    }

    props.onValidated({
      EMAIL: email,
      FNAME: name
    });
  };

  useEffect(() => {
    let hasChanged = false;
    if (props.status !== status) {
      setStatus(props.status);
      hasChanged = true;
    }
    if (props.message !== message) {
      setMessage(props.message);
      hasChanged = true;
    }
    if (!hasChanged) return;

    if (props.status === "error") {
      switch (true) {
        case props.message === "0 - An email address must contain a single @":
          setEmailError(true);
          setEmailErrorMsg("An email address must contain a single @");
          break;
        case props.message ===
          "0 - The username portion of the email address is empty":
          setEmailError(true);
          setEmailErrorMsg("The username portion of the email is empty");
          break;
        case props.message.includes(
          "0 - The domain portion of the email address is invalid"
        ):
          setEmailError(true);
          setEmailErrorMsg("The domain portion of the email is invalid");
          break;
        case props.message.includes(
          "0 - The username portion of the email address is invalid"
        ):
          setEmailError(true);
          setEmailErrorMsg("The username portion of the email is invalid");
          break;
        case props.message.includes("This email address looks fake or invalid"):
          setEmailError(true);
          setEmailErrorMsg("This email address looks fake or invalid");
          break;
        case props.message.includes("has too many recent signup requests"):
          setEmailError(true);
          setEmailErrorMsg("This email has too many recent signup requests");
          break;
        default:
          setNameError(true);
          setNameErrorMsg("Something went wrong, please check your details");
          console.log("NO ERROR TO REPORT...");
      }
    }

    switch (props.status) {
      case "sending":
        setFormStatus(
          <Typography gutterBottom>{`Sending subscription`}</Typography>
        );
        break;
      case "success":
        setFormStatus(
          <Typography gutterBottom>{`Thanks for subscribing`}</Typography>
        );
        break;
    }
  });

  return (
    <div className={classes.root}>
      <form>
        {formStatus}
        <TextField
          error={nameError}
          helperText={nameErrorMsg}
          id="name"
          label="Your first name"
          className="form-control"
          value={name}
          onChange={handleChange("name")}
          margin="normal"
        />
        <TextField
          error={emailError}
          helperText={emailErrorMsg}
          id="email"
          label="Your Email"
          className="form-control"
          value={email}
          onChange={handleChange("email")}
          margin="normal"
        />
        <br />
        <Typography gutterBottom>
          {`We hate spam and will never share your details with anyone else.`}
        </Typography>
        <br />
        <Button onClick={submit} variant="contained" color="secondary">
          {"Keep me updated!"}
        </Button>
      </form>
    </div>
  );
}

export default withTheme(MailchimpForm);
