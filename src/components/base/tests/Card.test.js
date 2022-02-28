import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import {CardWrapper, CardHeader, CardBody, CardSubHeader, CardSubBody} from "../Card"

afterEach(cleanup);

it("renders", () => {
  const {asFragment} = render(<CardWrapper>Test text</CardWrapper>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} = render(<CardHeader>Test text</CardHeader>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} = render(<CardBody>Test text</CardBody>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} = render(<CardSubHeader>Test text</CardSubHeader>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} = render(<CardSubBody>Test text</CardSubBody>);
  expect(asFragment()).toMatchSnapshot();
});
