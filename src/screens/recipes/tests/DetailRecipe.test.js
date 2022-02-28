import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import DetailRecipe from "../DetailRecipe"

const state = {
  recipe: {
    id: 1,
    name: "test text recipe",
    description: "test text description",
    ingredients: [{ id: 0, name: "test text ingredient" }],
  }
}

afterEach(cleanup);

it("renders", () => {
  const history = createMemoryHistory();
  history.push("/recipes/1", state);

  const {asFragment, getByText} = render(
    <Router location={history.location} navigator={history}>
      <DetailRecipe/>
    </Router>);
      
    expect(asFragment()).toMatchSnapshot();
    getByText(state.recipe.name);
    getByText(state.recipe.description);
    getByText(state.recipe.ingredients[0].name);
});
