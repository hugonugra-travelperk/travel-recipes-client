import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import IngredientElement from "../IngredientElement"

afterEach(cleanup);

it("renders", () => {
  const {asFragment} = render(<IngredientElement ingredient={{'name': 'test text'}}/>);
  expect(asFragment()).toMatchSnapshot();
});
