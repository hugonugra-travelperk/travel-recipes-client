import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RecipeElement from "../RecipeElement"

afterEach(cleanup);

it("renders", () => {
  const {asFragment} = render(
    <BrowserRouter>
      <RecipeElement
        handleUpdate={()=>{}} recipe = {{'id':'1', 'name': 'test text recipe',
          'ingredients': [{'id': '1', 'name': 'test text ingredient'}]}
        }
      />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
