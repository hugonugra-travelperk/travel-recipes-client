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

it("renders", async () => {
  const history = createMemoryHistory();
  history.push("/recipes/1", state);

  const {asFragment, findByText} = render(
    <Router location={history.location} navigator={history}>
      <DetailRecipe/>
    </Router>);
      
    expect(await findByText(state.recipe.name)).toBeVisible();
    expect(await findByText(state.recipe.description)).toBeVisible();
    expect(await findByText(state.recipe.ingredients[0].name)).toBeVisible();
});
