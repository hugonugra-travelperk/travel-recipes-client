import { useNavigate } from "react-router-dom";
import { CardWrapper, CardHeader, CardBody, CardSubHeader} from "../base/Card";
import IngredientsList from "../ingredients/IngredientsList"
import {Button} from '../../components/base/Button'
import DeleteButton from "./DeleteButton";

export default function RecipeElement(props){
  let navigate = useNavigate();

  const editParams=()=>{
    navigate('/edit/' + props.recipe.id, {state: {recipe: props.recipe}})
  }

  const viewParams=()=>{
    navigate('/' + props.recipe.id, {state: {recipe: props.recipe}})
  }

  function DetailButton(){
    if (!props.detail){
      return(
        <Button onClick={()=>{ viewParams() }}>View</Button>
      )
    }
  }

  return(
    <CardWrapper>
      <CardHeader>
        {props.recipe.name}
      </CardHeader>
      <CardBody>
        {props.recipe.description}
        <CardSubHeader>
          Ingredients
        </CardSubHeader>
        <IngredientsList recipe_id={props.recipe.id} ingredients={props.recipe.ingredients}/>
        {DetailButton()}
        <Button onClick={()=>{ editParams() }}>Edit</Button>
        <DeleteButton handleUpdate={props.handleUpdate} recipe = {props.recipe}/>
      </CardBody>
    </CardWrapper>
  )
}
