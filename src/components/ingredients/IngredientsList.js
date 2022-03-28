import { v4 as uuidv4 } from 'uuid';
import { CardSubBody } from "../base/Card";
import {ListItem } from "../base/List"
import IngredientElement from './IngredientElement'

export default function IngredientsList(props){
  return(
    <CardSubBody>
      <ul>
        {props.ingredients.map(function(item){
          console.log(item)
          return (
            <ListItem key={item.id}>
              <IngredientElement ingredient={item}/>
            </ListItem>
          )
        })}
      </ul>
    </CardSubBody>
  )
}
