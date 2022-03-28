import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import {Badge} from "../Badge"

it("renders", () => {
  const {asFragment} = render(<Badge>Test text</Badge>);
  expect(asFragment()).toMatchSnapshot();
});
