import React from "react";
import { render, cleanup } from "@testing-library/react";

import NewsStories from "./NewsStories";

afterEach(cleanup);

test("NewsStories", async () => {
  const props = {
    title:
      "Choose the correct sound: ~/:i/~ (the long ‘e’ sound) or ~/e/~ (the short ‘e’ sound)",
    headline: "Eels travel far",
    options: ["...", "i:", "e", "o"],
    answers: ["i:", "i:", "i:", "i:", "e", "o", "e"],
    sentences: [
      "A Sydney ~ee~l OPTION br~ee~ds OPTION once. The eel l~ea~ves OPTION it's pond from a park in Sydney. It swims through cr~ee~ks OPTION and drainpipes. It slithers over grass to the n~e~xt OPTION suburb. It moves across two golf courses. It crosses swampy ~a~reas OPTION. It arrives at the airport. Sydney Airport is next to a bay. It ~e~nters OPTION the bay and swims across the s~ea~ OPTION 2 000 km to N~e~w OPTION Caledonia.",
      "It lays m~a~ny OPTION eggs – about 20 million ~e~ggs OPTION.",
      "The eel d~ie~s OPTION, but its offpsring float back to Australia. They swim to the bay next to Sydney Airport. They move across the swampy land, th~e~ OPTION two golf courses, through the drainpipes and creeks back to the pond in the park'."
    ],
    other: [],
    userAuth: 1
  };

  const { container } = render(<NewsStories {...props} />);

  expect(container).toMatchSnapshot();
});
