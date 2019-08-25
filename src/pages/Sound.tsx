import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import * as jsonData from "./../data/sounds.json";
import ActivityButtons from "../components/ActivityButtons";
import ExtractActivity from "../components/ExtractActivity";
import SEO from "../components/SEO";
import SoundTitle from "../components/SoundTitle";

export default props => {
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
      <Container>
        <h4>{"Oops, not a valid sound"}</h4>
      </Container>
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
    <Container>
      <SEO meta={SEOlocation} />
      <SoundTitle phoneme={data.ipa} str={data.title} />
      <hr />

      <h3>{`Pronunciation activities for ${data.tag}`}</h3>

      <div>
        <ActivityButtons
          phoneme={phoneme}
          activityNames={Object.keys(data.activities)}
          {...props}
        />
      </div>
      <hr />

      {activityComponent}
    </Container>
  );
};
