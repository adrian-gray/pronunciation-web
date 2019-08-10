import React, { useState, useEffect } from "react";

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import jsonData from "./../data/sounds";
import ActivityButtons from "./../components/ActivityButtons";
import ExtractActivity from "./../components/ExtractActivity";
import SEO from "./../components/SEO";
import SoundTitle from "./../components/SoundTitle";

const useStyles = makeStyles(theme => ({
  page: theme.page
}));

function Sound(props) {
  const classes = useStyles(props);

  const phoneme = props.match.params.phoneme;
  const activity =
    (props.match.params.activity &&
      props.match.params.activity.replace(/-/g, " ")) ||
    "none";
  const data = jsonData["phonemes"][phoneme];

  const [subscriptionLevel, setSubscriptionLevel] = useState(null);

  useEffect(() => {
    setSubscriptionLevel(props.subscriptionLevel);
  });

  if (!data) {
    return (
      <Paper className={classes.page}>
        <Typography variant="h4" gutterBottom>
          {"Oops, not a valid sound"}
        </Typography>
      </Paper>
    );
  }

  const SEOlocation = `sound ${phoneme} ${activity}`;

  const activityComponent = ExtractActivity({
    props,
    activityName: activity,
    data,
    subscriptionLevel
  });

  return (
    <Paper className={classes.page}>
      <SEO meta={SEOlocation} />
      <SoundTitle phoneme={data.ipa} str={data.title} />
      <Divider />

      <Typography variant="h4" gutterBottom>
        {`Pronunciation activities for ${data.tag}`}
      </Typography>

      <div>
        <ActivityButtons
          phoneme={phoneme}
          activityNames={Object.keys(data.activities)}
          {...props}
        />
      </div>
      <Divider />

      {activityComponent}
    </Paper>
  );
}

export default withTheme(Sound);
