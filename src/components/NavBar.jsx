import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  white: {
    color: "#FFFFFF"
  }
}));

function NavBar(props) {
  const classes = useStyles(props);

  let homeLink = "/";
  let changeLoginStatus;

  if (props.user) {
    changeLoginStatus = (
      <Button onClick={props.signout} color="inherit">
        {"Sign Out"}
      </Button>
    );
    homeLink = "/home";
  } else {
    changeLoginStatus = (
      <Button component={Link} to="/login" color="inherit">
        {"Sign In or Up"}
      </Button>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="subtitle1" className={classes.flex}>
            <Button component={Link} to={homeLink}>
              <span className={classes.white}>{"Pronounce Web"}</span>
            </Button>
          </Typography>
          {changeLoginStatus}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withTheme(NavBar);
