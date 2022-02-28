import RecipeForm from '../../components/recipes/RecipeForm'

export default function NewRecipe() {
  let new_recipe = {
    'name': '',
    'description': '',
    'ingredients': [],
  }

  return (
    <RecipeForm title="New Recipe" method='POST' recipe={new_recipe}/>
  )
}
