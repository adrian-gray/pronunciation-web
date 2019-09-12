import React from "react";

import { capitalise } from "./../utils/utils";

export default (props: { name: string }) => {
  const { name } = props;

  return (
    <div className="head-space">
      <div>
        <h3 className="personals-pace">
          {`${capitalise(name)} - activity coming soon`}
        </h3>
      </div>
    </div>
  );
};
