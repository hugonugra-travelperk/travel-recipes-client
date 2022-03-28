import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import IngredientsList from "../IngredientsList"

it("renders", () => {
  const {asFragment} = render(<IngredientsList ingredients={[{'id':'1', 'name': 'test text'}]}/>);
  expect(asFragment()).toMatchSnapshot();
});
