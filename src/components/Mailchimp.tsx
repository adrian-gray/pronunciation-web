import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Container from "react-bootstrap/Container";

import MailchimpCustom from "./MailChimpCustom";

const url =
  "//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a";

interface IMailChimp {
  subscribe: Function;
  status: string;
  message: string;
}

const form = (params: IMailChimp) => {
  const { subscribe, status, message } = params;
  return (
    <MailchimpCustom
      status={status}
      message={message}
      onValidated={(formData: any) => subscribe(formData)}
    />
  );
};

export default () => {
  return (
    <Container className="mailchimp-bg">
      <div className="mailchimp-subscribe">
        <MailchimpSubscribe url={url} render={form} />
      </div>
    </Container>
  );
};
