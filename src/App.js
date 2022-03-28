import './App.css';
import RecipesIndex from './screens/recipes/RecipesIndex';
import NewRecipe from './screens/recipes/NewRecipe';
import EditRecipe from './screens/recipes/EditRecipe'
import DetailRecipe from './screens/recipes/DetailRecipe'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/new" element={<NewRecipe />}/>
        <Route path="/edit/:id" element={<EditRecipe />}/>
        <Route path="/:id" element={<DetailRecipe />}/>
        <Route path="/" element={<RecipesIndex />}/>
      </Routes>
    </div>
  );
}

export default App;
