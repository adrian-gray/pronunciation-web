import React from "react";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

import Dialogues from "./Dialogues";

afterEach(cleanup);

test("Dialogues", async () => {
  const props = {
    ipa: "a:",
    dialogues: ["foo", "bar", "baz", "quox", "apple", "banana", "chad", "elle"]
  };

  const container = shallow(<Dialogues {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
