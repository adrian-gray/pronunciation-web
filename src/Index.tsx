import React from "react";
import { hydrate, render } from "react-dom";

import App from "./App";

const rootEl = document.getElementById("app");
if (rootEl.hasChildNodes()) {
  hydrate(<App />, document.getElementById("app"));
} else {
  render(<App />, document.getElementById("app"));
}
