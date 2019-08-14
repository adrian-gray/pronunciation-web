import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import FindTheWOrds from "./FindTheWOrds";

afterEach(cleanup);

test("FindTheWOrds", async () => {
  const props = {
    ipa: "a:",
    words: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"],
    correct: ["foo", "bar", "baz"],
    userAuth: 1
  };

  const container = shallow(<FindTheWOrds {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
