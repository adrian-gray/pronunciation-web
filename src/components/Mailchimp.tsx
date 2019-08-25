import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Container from "react-bootstrap/Container";

import MailchimpCustom from "./MailchimpCustom";

const url =
  "//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a";

const form = ({ subscribe, status, message }) => {
  return (
    <MailchimpCustom
      status={status}
      message={message}
      onValidated={formData => subscribe(formData)}
    />
  );
};

export default props => {
  return (
    <Container className="mailchimp-bg">
      <div className="mailchimp-subscribe">
        <MailchimpSubscribe url={url} render={form} />
      </div>
    </Container>
  );
};
