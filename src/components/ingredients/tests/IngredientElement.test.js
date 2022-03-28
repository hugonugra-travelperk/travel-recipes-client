import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import IngredientElement from "../IngredientElement"

it("renders", () => {
  const {asFragment} = render(<IngredientElement ingredient={{'name': 'test text'}}/>);
  expect(asFragment()).toMatchSnapshot();
});
