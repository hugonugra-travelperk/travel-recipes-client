import { v4 as uuidv4 } from 'uuid';
import { CardSubBody } from "../base/Card";
import {ListItem } from "../base/List"
import IngredientElement from './IngredientElement'

export default function IngredientsList(props){
  return(
    <CardSubBody>
      <ul>
        {props.ingredients.map(function(item){
          return (
            <ListItem key={uuidv4()}>
              <IngredientElement ingredient={item}/>
            </ListItem>
          )
        })}
      </ul>
    </CardSubBody>
  )
}
