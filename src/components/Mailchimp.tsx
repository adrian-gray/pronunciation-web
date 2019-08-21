import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import MailchimpCustom from "./MailchimpCustom";

const url =
  "//endual.us8.list-manage.com/subscribe/post?u=5cfcc43825365c2c32230cdde&id=f0489cd39a";

const useStyles = makeStyles(() => ({
  mailchimp: {
    backgroundColor: "#fff8f0"
  }
}));

const form = ({ subscribe, status, message }) => {
  return (
    <MailchimpCustom
      status={status}
      message={message}
      onValidated={formData => subscribe(formData)}
    />
  );
};

function Mailchimp(props) {
  const classes = useStyles(props);

  return (
    <Paper className={classes.mailchimp}>
      <div className="mailchimp-subscribe">
        <MailchimpSubscribe url={url} render={form} />
      </div>
    </Paper>
  );
}

export default withTheme(Mailchimp);
