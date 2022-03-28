import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import {ListItem} from "../List"

it("renders", () => {
  const {asFragment} = render(<ListItem>Test text</ListItem>);
  expect(asFragment()).toMatchSnapshot();
});
