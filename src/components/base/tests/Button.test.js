import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import {Button} from "../Button"

it("renders", () => {
  const {asFragment} = render(<Button>Test text</Button>);
  expect(asFragment()).toMatchSnapshot();
});
