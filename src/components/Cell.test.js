import React from "react";
import { mount } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Cell from "./Cell";

afterEach(cleanup);

test("Cell", async () => {
  const hilite = true;
  const handleClick = function noop() {};
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <Cell
            hilite={hilite}
            key="dog"
            str="rabbit"
            handleClick={handleClick}
          />
        </tr>
      </tbody>
    </table>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Cell with hilite", async () => {
  const hilite = false;
  const { container } = render(
    <table>
      <tbody>
        <tr>
          <Cell hilite={hilite} key="dog" str="rabbit" handleClick={null} />
        </tr>
      </tbody>
    </table>
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("Cell click callback", async () => {
  const hilite = true;
  const mockCallback = jest.fn();
  const container = mount(
    <table>
      <tbody>
        <tr>
          <Cell
            className="bob"
            hilite={hilite}
            key="dog"
            str="rabbit"
            handleClick={mockCallback}
          />
        </tr>
      </tbody>
    </table>
  );

  const td = container.find("td");
  expect(td).toHaveLength(1);

  td.simulate("click");
  expect(mockCallback).toHaveBeenCalled();
});

test("Cell click no callback", async () => {
  const hilite = true;
  const mockCallback = jest.fn();
  const container = mount(
    <table>
      <tbody>
        <tr>
          <Cell className="bob" hilite={hilite} key="dog" str="rabbit" />
        </tr>
      </tbody>
    </table>
  );

  const td = container.find("td");
  expect(td).toHaveLength(1);

  td.simulate("click");
  expect(mockCallback).not.toHaveBeenCalled();
});
