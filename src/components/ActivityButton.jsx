import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import { capitalise } from "./../utils/utils";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  },
  open: {
    color: "green"
  },
  member: {
    color: "#BBB"
  },
  pending: {
    color: "maroon"
  },
  page: theme.page
}));

const toLink = (phoneme, activity) => {
  const title = capitalise(activity);
  const websafe = activity.split(" ").join("-");
  const link = `/sound/${phoneme}/${websafe}`;
  return { title, link };
};

const ActivityButton = props => {
  const classes = useStyles(props);

  const { accessStatus, activity, phoneme, subscriptionLevel } = props;
  const { title, link } = toLink(phoneme, activity);

  let chipClass = classes[accessStatus];

  const [chipClasses, setChipClasses] = useState(
    `${classes.chip} ${chipClass}`
  );

  useEffect(() => {
    if (accessStatus === "member" && subscriptionLevel) {
      chipClass = classes["open"];
      setChipClasses(`${classes.chip} ${chipClass}`);
    }
  });

  return (
    <Chip
      label={title}
      className={chipClasses}
      component={Link}
      to={link}
      clickable
      key={title}
    />
  );
};

export default withTheme(ActivityButton);
