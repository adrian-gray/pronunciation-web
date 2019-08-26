import React from "react";
import { Redirect } from "react-router-dom";

import { IUser } from "./../../@types/PronounceWeb";

import Container from "react-bootstrap/Container";

export default (props: { user: IUser }) => {
  const { user } = props;

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <Container className="page">
      <div className="head-space">
        <h3>{`Your profile`}</h3>
        <p>{user.displayName}</p>
        <div>
          <img width="100px" src={user.photoURL} />
        </div>
      </div>
    </Container>
  );
};
