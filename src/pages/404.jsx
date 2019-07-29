import React from "react";

import SEO from "./../components/SEO";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace
}));

function FourOhFour(props) {
  const classes = useStyles(props);
  const SEOlocation = "404";

  return (
    <div className={classes.headspace}>
      <SEO meta={SEOlocation} />
      <Typography variant="h5" gutterBottom>
        {`Oops, that address is not a thing I understand.`}
      </Typography>
      <Typography gutterBottom>
        <Link to="/">{"Head to the homepage and try again."}</Link>
      </Typography>
    </div>
  );
}

export default withTheme(FourOhFour);
