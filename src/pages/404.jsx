import React from "react";

import SEO from "./../components/SEO";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  headspace: theme.headspace
});

const FourOhFour = props => {
  const { classes } = props;
  const SEOlocation = "404";

  return (
    <div className={classes.headspace}>
      <SEO meta={SEOlocation} />
      <Typography variant="title" gutterBottom>
        {`Oops, that address is not a thing I understand.`}
      </Typography>
      <Typography gutterBottom>
        <Link to="/">{"Head to the homepage and try again."}</Link>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(FourOhFour);
