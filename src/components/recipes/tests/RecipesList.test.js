import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RecipesList from "../RecipesList"

afterEach(cleanup);

it("renders", () => {
  const {asFragment} = render(
    <BrowserRouter>
      <RecipesList
        handleUpdate={()=>{}} recipes = {[{'id':'1', 'name': 'test text recipe',
          'ingredients': [{'id': '1', 'name': 'test text ingredient'}]}]
        }
      />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
