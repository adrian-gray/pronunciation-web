import React from "react";

import SEO from "./../components/SEO";
import { Link } from "react-router-dom";

export default props => {
  const SeoLocation = "404";

  return (
    <div className="head-space">
      <SEO meta={SeoLocation} />
      <h3>{`Oops, that address is not a thing I understand.`}</h3>
      <p>
        <Link to="/">{"Head to the homepage and try again."}</Link>
      </p>
    </div>
  );
};
