import React from "react";
import { shallow } from "enzyme";
import { cleanup } from "@testing-library/react";

import ActivityButtons from "./ActivityButtons";

afterEach(cleanup);

test("ActivityButtons", async () => {
  const props = {
    activityNames: [
      "foo",
      "bar",
      "baz",
      "quox",
      "apple",
      "banana",
      "chad",
      "elle"
    ]
  };

  const container = shallow(<ActivityButtons {...props} />);

  expect(container.firstChild).toMatchSnapshot();
});
