import React from "react";

import ActivityButton from "./ActivityButton";
import {
  openActivities,
  memberActivities,
  pendingActivities
} from "./../data/activityAccess";

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
