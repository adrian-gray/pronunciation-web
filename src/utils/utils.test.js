import { capitalise } from "./utils";

test("capitalise bob to equal Bob", () => {
  expect(capitalise("bob")).toBe("Bob");
});
