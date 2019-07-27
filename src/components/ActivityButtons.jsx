import React from "react";

import ActivityButton from "./ActivityButton";

const openActivities = [
  "how to pronounce",
  "movie",
  "words",
  "phrases",
  "dialogues",
  "common words",
  "tongue twisters",
  "minimal pairs",
  "say the sentences"
];
const memberActivities = [
  "find the words",
  "odd one out",
  "beginner news stories",
  "intermediate news stories",
  "words maze",
  "four in a row"
];
const pendingActivities = [
  "hear the words",
  "pronunciation journey",
  "sort the words",
  "rhyming words",
  "count the sounds",
  "write the minimal pair",
  "join to make words",
  "listen to the sounds",
  "minimal pairs dominos"
];

const getStatus = activity => {
  if (openActivities.includes(activity)) return "open";
  if (memberActivities.includes(activity)) return "member";
  if (pendingActivities.includes(activity)) return "pending";
  return undefined;
};

const ActivityButtons = props => {
  const { activityNames } = props;

  return activityNames.map(activity => (
    <ActivityButton
      activity={activity}
      key={activity}
      accessStatus={getStatus(activity)}
      {...props}
    />
  ));
};

export default ActivityButtons;
