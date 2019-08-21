import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

import SplitHilite from "./SplitHilite";

const useStyles = makeStyles(theme => ({
  headspace: theme.headspace,
  fullWidth: theme.fullWidth,
  subCanvas: theme.subCanvas,
  padded: {
    padding: "1em"
  }
}));

const HowToPronounce = props => {
  const classes = useStyles(props);

  const { arr, image, ipa } = props;
  const { url, alt, title } = image;

  const list = arr.map((el, i) => (
    <ListItem key={i}>
      <ListItemText>{el}</ListItemText>
    </ListItem>
  ));

  return (
    <div className={classes.headspace}>
      <Typography variant="h5" gutterBottom>
        {"How to pronounce "}
        <SplitHilite str={ipa} />
      </Typography>

      <Paper className={classes.subCanvas}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className={classes.padded}>
              <img
                className={classes.fullWidth}
                src={url}
                title={title}
                alt={alt}
              />
              <Typography variant="h6">{title}</Typography>
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

export default withTheme(HowToPronounce);
