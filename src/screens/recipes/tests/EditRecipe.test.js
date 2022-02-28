import {render, cleanup, fireEvent, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";
import EditRecipe from "../EditRecipe"

jest.mock("axios");

const state = {
  recipe: {
    id: 2,
    name: "test text recipe",
    description: "test text description",
    ingredients: [{ id: 0, name: "test text ingredient" }],
  }
}

afterEach(cleanup);

it("renders", () => {
  const history = createMemoryHistory();
  history.push("/recipes/edit/1", state);

  const {asFragment, getByDisplayValue, getByText, getByPlaceholderText, getAllByText} = render(
      <Router location={history.location} navigator={history}>
        <EditRecipe/>
      </Router>
    );

  axios.request.mockResolvedValueOnce({});

  expect(asFragment()).toMatchSnapshot();
  getByDisplayValue(state.recipe.name);
  getByDisplayValue(state.recipe.description);
  getByText(state.recipe.ingredients[0].name);

  fireEvent.change(
    getByPlaceholderText("Name"),
    {target: { value: "Ceviche" }}
  );

  fireEvent.change(
    getByPlaceholderText("Description"),
    {target: { value: "fish with lemon" }}
  );

  fireEvent.change(
    getByPlaceholderText("New Ingredient"),
    {target: { value: "fish" }}
  );

  fireEvent.click(getByText("Add"));

  expect(getByText("fish")).toBeInTheDocument();

  fireEvent.click(getAllByText("Edit Recipe")[1]);

  const payload = {  
    "description": "fish with lemon",
    "ingredients": [
      {
        "id": 0,
        "name": "test text ingredient",
      },
      {
      "name": "fish",
      },
    ],
    "name": "Ceviche",
  }

  expect(axios.request).toHaveBeenCalledWith({"data": payload, "method": "PATCH", "url": "/recipes/2/"});
})
