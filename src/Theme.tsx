import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    page: {
      "flex-grow": 1;
      "padding-top": "1rem";
      "padding-left": "1rem";
      "padding-right": "1rem";
      "padding-bottom": "1rem";
    };
    subCanvas: {
      marginTop: 16;
      marginBottom: 16;
    };
    largeText: {
      fontSize: "1.25rem";
    };
    headspace: {
      paddingTop: 16;
    };
    fullWidth: {
      width: "100%";
    };
    hilite: {
      color: "#CC0000";
    };
    cell: {
      paddingLeft: 12;
      paddingRight: 12;
      textAlign: "center";
    };
    cellHiliteBG: {
      background: "#CCC";
    };
    correctBG: {
      background: "#CFC";
    };
    incorrectBG: {
      background: "#FCC";
    };
    sentence: {
      padding: "5rem";
      paddingLeft: "1rem";
      paddingRight: "1rem";
      fontSize: "1.2rem";
    };
    clearFloat: {
      clear: "both";
    };
    personalSpace: {
      padding: "1rem";
      margin: "1rem";
    };
    center: {
      textAlign: "center";
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    page?: {
      "flex-grow": 1;
      "padding-top": "1rem";
      "padding-left": "1rem";
      "padding-right": "1rem";
      "padding-bottom": "1rem";
    };
    subCanvas?: {
      marginTop: 16;
      marginBottom: 16;
    };
    largeText?: {
      fontSize: "1.25rem";
    };
    headspace?: {
      paddingTop: 16;
    };
    fullWidth?: {
      width: "100%";
    };
    hilite?: {
      color: "#CC0000";
    };
    cell?: {
      paddingLeft: 12;
      paddingRight: 12;
      textAlign: "center";
    };
    cellHiliteBG?: {
      background: "#CCC";
    };
    correctBG?: {
      background: "#CFC";
    };
    incorrectBG?: {
      background: "#FCC";
    };
    sentence?: {
      padding: "5rem";
      paddingLeft: "1rem";
      paddingRight: "1rem";
      fontSize: "1.2rem";
    };
    clearFloat?: {
      clear: "both";
    };
    personalSpace?: {
      padding: "1rem";
      margin: "1rem";
    };
    center?: {
      textAlign: "center";
    };
  }
}

const defaultTheme = createMuiTheme();

export default createMuiTheme({
  palette: {
    primary: {
      main: "#b71c1c"
    },
    secondary: orange
  },
  typography: {
    fontSize: 16
  },
  largeText: {
    fontSize: "1.25rem"
  }
});
