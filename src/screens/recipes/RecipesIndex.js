import React from "react";
import {CardWrapper, CardHeader, CardBody} from '../../components/base/Card'
import {Button} from '../../components/base/Button'
import RecipesList from '../../components/recipes/RecipesList'
import {Link} from "react-router-dom";

export default function RecipesIndex() {
  return (
    <CardWrapper>
      <CardHeader>
        Recipes List
        <br/>
        <Link to="/new">
          <Button primary> New Recipe </Button>
        </Link>
      </CardHeader>
      <CardBody>
        <RecipesList/>
      </CardBody>
    </CardWrapper>
  )
}
