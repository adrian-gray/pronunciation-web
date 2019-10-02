import React from "react";
import { render, cleanup } from "@testing-library/react";

import SayTheSentences from "./SayTheSentences";

afterEach(cleanup);

test("SayTheSentences", async () => {
  const props = {
    ipa: "c~a~t",
    sentences: ["my ~hat~ has ears", "My ~ca~t does not"]
  };

  const { container } = render(<SayTheSentences {...props} />);

  expect(container).toMatchSnapshot();
});
