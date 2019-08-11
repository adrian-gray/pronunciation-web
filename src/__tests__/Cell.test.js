import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";

import Cell from "./../components/Cell";

configure({ adapter: new Adapter() });
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
  const mockCallback = jest.fn(x => x);
  const container = shallow(
    <table>
      <tbody>
        <tr>
          <Cell
            hilite={hilite}
            key="dog"
            str="rabbit"
            handleClick={mockCallback}
          />
        </tr>
      </tbody>
    </table>
  );

  const cell = container.find("tr");
  expect(cell.length).toEqual(1);
  cell.simulate("click");
  expect(mockCallback.mock.calls.length).toBe(1);
});
