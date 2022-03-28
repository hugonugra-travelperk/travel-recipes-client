import {render, cleanup, waitFor} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import axios from "axios";
import RecipesIndex from "../RecipesIndex"

jest.mock("axios");

const BASE_URL = 'http://localhost:8000/api/recipes'

it("renders", async () => {
  const history = createMemoryHistory();
  history.push("/");

  const {asFragment, findByText} = render(
    <Router location={history.location} navigator={history}>
      <RecipesIndex/>
    </Router>);
      
    findByText('Recipes List');
});

describe("List Recipes", () => {
  describe("when API call is successful", () => {
    it("should return recipes list", async () => {
      // given
      const history = createMemoryHistory();
      history.push("/");
      const recipes = {data: [
        { id: 1,
          name: "Ceviche",
          description: "fish with lemon",
          ingredients: [{id: 1, name: "fish"}, {id: 1, name: "lemon"}]
        },
        { id: 1,
          name: "Locro",
          description: "potatoes with milk",
          ingredients: [{id: 1, name: "potatoes"}, {id: 1, name: "milk"}]
        },
      ]};
      axios.request.mockResolvedValueOnce(recipes);

      // when
      const {findByText} = render(
          <Router location={history.location} navigator={history}>
            <RecipesIndex/>
          </Router>
        );
        await waitFor( async() => expect(await findByText('Ceviche')).toBeInTheDocument());

      // then
      expect(axios.request).toHaveBeenCalledWith({"method": "GET", "url": "/recipes/"});
      expect(findByText('Ceviche'));
      expect(findByText('fish with lemon'));
      expect(findByText('fish'));
      expect(findByText('lemon'));
    });
  });

  describe("when API call fails", () => {
    it("should return empty recipes list", async () => {
      // given
      const history = createMemoryHistory();
      history.push("/");
      const message = "Network Error";
      axios.request.mockRejectedValueOnce(new Error(message));

      // when
      const {findByText} = render(
        <Router location={history.location} navigator={history}>
          <RecipesIndex/>
        </Router>
      );
      await waitFor(async() => expect(await findByText('Network Error')).toBeInTheDocument());

      // then
      expect(axios.request).toHaveBeenCalledWith({"method": "GET", "url": "/recipes/"});
      expect(await findByText('Network Error')).toBeVisible();
    });
  });
});
