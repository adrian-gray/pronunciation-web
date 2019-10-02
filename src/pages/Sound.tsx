import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import soundsData from "../data/sounds";
import ActivityButtons from "../components/ActivityButtons";
import ExtractActivity from "../components/ExtractActivity";
import SEO from "../components/SEO";
import SoundTitle from "../components/SoundTitle";

interface SoundMatchParams {
  phoneme: string;
  activity: string;
}

interface ISoundProps extends RouteComponentProps<SoundMatchParams> {
  subscriptionLevel: number;
}

export default (props: ISoundProps) => {
  const phoneme = props.match.params.phoneme;
  const activity =
    (props.match.params.activity &&
      props.match.params.activity.replace(/-/g, " ")) ||
    "none";

  const data: {
    ipa: string;
    title: string;
    tag: string;
    activities: any;
  } = soundsData[phoneme];

  const [subscriptionLevel, setSubscriptionLevel] = useState(null);

  useEffect(() => {
    setSubscriptionLevel(props.subscriptionLevel);
  });

  if (!data) {
    return (
      <div>
        <h3>{"Oops, not a valid sound"}</h3>
      </div>
    );
  }

  const SEOlocation = `sound ${phoneme} ${activity}`;

  const activityComponent = (
    <ExtractActivity
      activityName={activity}
      data={data}
      subscriptionLevel={subscriptionLevel}
      props={props}
    />
  );

  return (
    <div className="page">
      <SEO meta={SEOlocation} />
      <SoundTitle phoneme={data.ipa} str={data.title} />
      <hr className="clear-float" />
      <h1>{`Pronunciation activities for ${data.tag}`}</h1>
      <div>
        <ActivityButtons
          phoneme={phoneme}
          activityNames={Object.keys(data.activities)}
          {...props}
        />
      </div>
      <hr />
      {activityComponent}
    </div>
  );
};
