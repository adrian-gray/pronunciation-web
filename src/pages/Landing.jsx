import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import Mailchimp from "./../components/Mailchimp";
import SEO from "./../components/SEO";

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: 2 * theme.spacing.unit,
    marginLeft: "auto",
    marginRight: "auto"
  },
  page: theme.page,
  headspace: theme.headspace,
  para: {
    paddingTop: "0.5em",
    paddingBottom: "0.5em"
  },
  video: {
    width: "100%"
  },
  startBtn: {
    textAlign: "center",
    padding: "2em"
  }
});

const Landing = props => {
  const { classes } = props;

  return (
    <Paper className={classes.page}>
      <SEO meta="landing" />
      <Typography variant="display1" gutterBottom>
        {"Pronunciation Practice"}
      </Typography>
      <Typography variant="title" gutterBottom>
        {"Improve Your Spoken English"}
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {
          "Is poor English pronunciation holding you back in your career or studies? Do you want to improve your spoken English, but are not sure how? Help is on the way!"
        }
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {
          "We are currently producing over 60 videos lessons to help you improve your spoken English. The videos feature Nicky Brooks, a professional English language consultant, giving English language pronunciation lessons made for this site. She teaches how to make the sounds used in English, how to understand English sounds, and how to improve your accent in English."
        }
      </Typography>
      <Typography className={classes.para} gutterBottom>
        {
          "Following the pronunciation lessons are English pronunciation examples, recorded conversations, and interactive activities to help improve your pronunciation the right way. We are adding currently adding sounds and activities weekly. Improve your English pronunciation to speak clearly and professionally."
        }
      </Typography>
      <Typography variant="title" gutterBottom>
        {"Stay up to date as we add pronunciation activities"}
      </Typography>
      <Typography className={classes.headspace} gutterBottom>
        {
          "We are currently adding sounds and activities multiple times a week and are open in a limited testing capacity. We aim to launch in late 2018."
        }
      </Typography>
      <Mailchimp />
      <div className={classes.startBtn}>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          component={Link}
          to="/home"
        >
          {"Start Pronunciation Practice"}
        </Button>
      </div>
      <img
        className={classes.video}
        src="/assets/images/improve-english-pronounciation.jpg"
        title="Learn to improve English pronunciation"
        alt="Learn to improve English pronunciation"
      />
    </Paper>
  );
};

export default withStyles(styles)(Landing);
