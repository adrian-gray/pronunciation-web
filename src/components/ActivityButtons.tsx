import React from "react";

import ActivityButton from "./ActivityButton";
import {
  openActivities,
  memberActivities,
  pendingActivities
} from "./../data/activityAccess";

const getStatus = (activity: string) => {
  if (openActivities.includes(activity)) return "open";
  if (memberActivities.includes(activity)) return "member";
  if (pendingActivities.includes(activity)) return "pending";
  return undefined;
};

const ActivityButtons = (props: {
  phoneme: string;
  activityNames: string[];
  subscriptionLevel: number;
}) => {
  const { activityNames } = props;
  const buttons = activityNames.map(activity => (
    <ActivityButton
      activity={activity}
      key={activity}
      accessStatus={getStatus(activity)}
      subscriptionLevel={props.subscriptionLevel}
      phoneme={props.phoneme}
      {...props}
    />
  ));

  return <div>{buttons}</div>;
};

export default ActivityButtons;
