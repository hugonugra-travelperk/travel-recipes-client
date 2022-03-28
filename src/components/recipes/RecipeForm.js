import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {CardWrapper, CardHeader, CardBody} from '../../components/base/Card'
import {Button} from '../../components/base/Button'
import {InputForm} from '../../components/base/Input'
import IngredientsList from "../../components/ingredients/IngredientsList";
import useInput from '../../hooks/useInput'
import useAxios from '../../hooks/useAxios'

export default function RecipeForm(props) {
  let navigate = useNavigate();

  const DOMAIN_URL = '/recipes/'

  const [name, nameInput, resetName] = useInput({
    type: 'text',
    placeholder: 'Name',
    initial_value: props.recipe.name
  });

  const [description, descriptionInput, resetDescription] = useInput({
    type: 'area',
    placeholder: 'Description',
    initial_value: props.recipe.description
  });

  const [new_ingredient_name, newIngredientNameInput, resetIngredientName] = useInput({
    type: 'text',
    placeholder: 'New Ingredient',
  });
  
  const [ingredients, setIngredients] = useState(props.recipe.ingredients);

  const url = ('id' in props.recipe) ? DOMAIN_URL + props.recipe.id + '/' : DOMAIN_URL  

  const { dispatch, response, loading, error } = useAxios({
    method: props.method,
    url,
    data: {
      name,
      description,
      ingredients,
    }
  }, performAction)

  function add_ingredient() {
    setIngredients([...ingredients, {'name': new_ingredient_name }])
    resetIngredientName()
  }

  function performAction(res, err) {
    if(err === null && res) {
      setTimeout(()=>{navigate('/')}, 1000) 
    }
  }

  function goBack() {
    navigate('/')
  }

  return (
    <CardWrapper>
      <CardHeader>
        {props.title}
      </CardHeader>
      {error}
      <CardBody>
        <InputForm>
          {nameInput}
          {descriptionInput}
          Ingredients
          <IngredientsList ingredients={ingredients}/>
          {newIngredientNameInput}
          <Button primary onClick={() => add_ingredient()}> Add </Button>  
        </InputForm>
        <Button primary onClick={() => dispatch()}> {props.title} </Button>
        <Button primary onClick={() => goBack()}> Back </Button>
      </CardBody>
    </CardWrapper>
  )
}
