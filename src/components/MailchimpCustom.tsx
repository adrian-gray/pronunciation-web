import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import div from "react-bootstrap/div";
import Form from "react-bootstrap/Form";

export default (props: {
  status?: string;
  message?: string;
  onValidated?: any;
}) => {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (property: string) => {
    return (e: React.FormEvent) => {
      const element = e.target as HTMLInputElement;
      const value = element.value;
      switch (property) {
        case "name":
          setName(value);
          break;
        case "email":
          setEmail(value);
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
        setFormStatus(<p>{`Sending subscription`}</p>);
        break;
      case "success":
        setFormStatus(<p>{`Thanks for subscribing`}</p>);
        break;
    }
  });

  return (
    <div className="mailchip-root">
      <Form>
        {formStatus}
        <Form.Row>
          <Form.Label>Your first name</Form.Label>
          <Form.Control
            id="signin_email"
            placeholder="Your first name"
            className="form-control form-bottomspace"
            value={name}
            onChange={handleChange("fname")}
            autoComplete="name"
          />
        </Form.Row>

        <Form.Row>
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            id="email"
            placeholder="Your Email"
            className="form-control form-bottomspace"
            value={name}
            onChange={handleChange("email")}
            autoComplete="email"
          />
        </Form.Row>
        <Form.Row>
          <br />
          <p className="form-divider">
            {`We hate spam and will never share your details with anyone else.`}
          </p>
          <br />
          <Button variant="warning" onClick={submit}>
            {"Keep me updated!"}
          </Button>
        </Form.Row>
      </Form>
      <br />
    </div>
  );
};
