import React from "react";
import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import HowToPronounce from "./HowToPronounce";

afterEach(cleanup);

test("HowToPronounce", async () => {
  const props = {
    ipa: "a:",
    arr: ["foo", "bar"],
    image: {
      url: "foo.com",
      alt: "image",
      title: "image"
    }
  };

  const container = shallow(<HowToPronounce {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
