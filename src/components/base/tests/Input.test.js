import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import {InputForm, Input, InputArea} from "../Input"

it("renders", () => {
  const {asFragment} = render(<InputForm>Test text</InputForm>);
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} =
    render(
      <Input
        placeholder={'test text'}
        defaultValue={''}
      />
    );
  expect(asFragment()).toMatchSnapshot();
});

it("renders", () => {
  const {asFragment} =
    render(
      <InputArea
        placeholder={'test text'}
        defaultValue={''}
      />
    );
  expect(asFragment()).toMatchSnapshot();
});
