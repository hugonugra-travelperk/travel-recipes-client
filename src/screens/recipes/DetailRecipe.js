import {useNavigate, useLocation} from 'react-router-dom';
import {CardWrapper} from '../../components/base/Card'
import RecipeElement from '../../components/recipes/RecipeElement'
import {Button} from '../../components/base/Button'

export default function EditRecipe() {
  const location = useLocation();
  let navigate = useNavigate();

  let recipe = location.state.recipe;

  function goBack() {
    navigate('/')
  }

  return (
    <CardWrapper>
      <RecipeElement detail={true} recipe={recipe}/>
      <Button primary onClick={() => goBack()}> Back </Button>
    </CardWrapper>
  )
}
