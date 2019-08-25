import React from "react";
import { BrowserRouter } from "react-router-dom";

const { createBrowserHistory } = require("history");
const history = createBrowserHistory();
const location = {
  pathname: "/sound",
  search: "",
  state: "",
  hash: ""
};

import { render, cleanup } from "@testing-library/react";

import Sound from "./Sound";

afterEach(cleanup);

test("Sound", async () => {
  const props = {
    subscriptionLevel: 0,
    history: history,
    location: location,
    match: {
      url: "https://pronounceweb.com",
      path: "/sound",
      isExact: true,
      params: {
        activity: "",
        phoneme: "long-e"
      }
    }
  };

  const { container } = render(
    <BrowserRouter>
      <Sound {...props} />
    </BrowserRouter>
  );

  expect(container).toMatchSnapshot();
});
