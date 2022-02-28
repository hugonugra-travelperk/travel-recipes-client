import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RecipeForm from "../RecipeForm"

afterEach(cleanup);

const recipe = {'id':'1', 'name': 'test text recipe',
          'ingredients': [{'id': '1', 'name': 'test text ingredient'}]
        }

it("renders", () => {
  const {asFragment} = render(
    <BrowserRouter>
      <RecipeForm title="New Recipe" method='POST' recipe={recipe}/>
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
