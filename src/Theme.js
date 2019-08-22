"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var orange_1 = require("@material-ui/core/colors/orange");
var defaultTheme = styles_1.createMuiTheme();
exports["default"] = styles_1.createMuiTheme({
    palette: {
        primary: {
            main: "#b71c1c"
        },
        secondary: orange_1["default"]
    },
    typography: {
        fontSize: 16
    },
    largeText: {
        fontSize: "1.25rem"
    }
});
