import {render, cleanup, fireEvent, waitFor, screen} from "@testing-library/react"
import "@testing-library/jest-dom";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";
import NewRecipe from "../NewRecipe"

jest.mock("axios");

afterEach(cleanup);

it("renders", () => {
  const history = createMemoryHistory();
  history.push("/recipes/new/");

  const {asFragment, getByPlaceholderText, getByText, getAllByText } = render(
    <Router location={history.location} navigator={history}>
      <NewRecipe/>
    </Router>
  );

  axios.request.mockResolvedValueOnce({});

  expect(asFragment()).toMatchSnapshot();
  getByPlaceholderText('Name');
  getByPlaceholderText('Description');
  getByPlaceholderText('New Ingredient');

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

  fireEvent.click(getAllByText("New Recipe")[1]);

  const payload = {  
    "description": "fish with lemon",
    "ingredients": [
      {
      "name": "fish",
      },
    ],
    "name": "Ceviche",
  }

  expect(axios.request).toHaveBeenCalledWith({"data": payload, "method": "POST", "url": "/recipes/"});
});
