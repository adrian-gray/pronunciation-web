import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { capitalise } from "./../utils/utils";

const toLink = (phoneme, activity) => {
  const title = capitalise(activity);
  const websafe = activity.split(" ").join("-");
  const link = `/sound/${phoneme}/${websafe}`;
  return { title, link };
};

export default props => {
  const { accessStatus, activity, phoneme, subscriptionLevel } = props;
  const { title, link } = toLink(phoneme, activity);

  const [chipClasses, setChipClasses] = useState(
    `chip activity-${accessStatus}`
  );

  useEffect(() => {
    if (accessStatus === "member") {
      if (subscriptionLevel) {
        setChipClasses(`chip activity-open`);
      } else {
        setChipClasses(`chip activity-locked`);
      }
    }
  });

  return (
    <Link title={title} className={chipClasses} to={link} key={title}>
      {title}
    </Link>
  );
};
