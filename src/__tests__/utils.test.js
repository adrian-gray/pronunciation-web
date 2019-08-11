import { capitalise } from "./../utils/utils";

test("capitalise bob to equal Bob", () => {
  expect(capitalise("bob")).toBe("Bob");
});
