import { Badge } from "../base/Badge";

export default function IngredientElement(props){
  return(
    <Badge>
      {props.ingredient.name}
    </Badge>
  )
}
