import {useLocation} from 'react-router-dom';
import RecipeForm from '../../components/recipes/RecipeForm'

export default function EditRecipe() {
  const location = useLocation();

  let recipe = location.state.recipe;

  return (
    <RecipeForm title="Edit Recipe" method='PATCH' recipe={recipe}/>
  )
}
