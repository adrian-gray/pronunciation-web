import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";

import SplitHilite from "./SplitHilite";

const styles = theme => ({
  headspace: theme.headspace,
  fullWidth: theme.fullWidth,
  subCanvas: theme.subCanvas,
  padded: {
    padding: "1em"
  }
});

const HowToPronounce = props => {
  const { arr, classes, image, ipa } = props;
  const { url, alt, title } = image;

  const list = arr.map((el, i) => (
    <ListItem key={i}>
      <ListItemText>{el}</ListItemText>
    </ListItem>
  ));

  return (
    <div className={classes.headspace}>
      <Typography variant="title" gutterBottom>
        {"How to pronounce "}
        <SplitHilite str={ipa} />
      </Typography>

      <Paper className={classes.subCanvas}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <div className={classes.padded}>
              <img className={classes.fullWidth} src={url} title={title} alt={alt} />
              <Typography variant="subheading">{title}</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List>{list}</List>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(HowToPronounce);
