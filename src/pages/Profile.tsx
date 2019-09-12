import React from "react";
import { Redirect } from "react-router-dom";

import { IUser } from "./../../@types/PronounceWeb";

export default (props: { user: IUser }) => {
  const { user } = props;

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page">
      <div className="head-space">
        <h3>{`Your profile`}</h3>
        <p>{user.displayName}</p>
        <div>
          <img width="100px" src={user.photoURL} />
        </div>
      </div>
    </div>
  );
};
