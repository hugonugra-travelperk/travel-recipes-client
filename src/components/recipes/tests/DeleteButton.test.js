import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import DeleteButton from "../DeleteButton"

afterEach(cleanup);

it("renders", () => {
  const {asFragment} = render(
    <BrowserRouter>
      <DeleteButton handleUpdate={()=>{}} recipe = {{'id':'1', 'name': 'test text'}}/>
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
