import React from "react";
import {Button} from '../../components/base/Button'
import useInput from '../../hooks/useInput'

export default function SearchBox(props){
  const [name, nameInput, resetName] = useInput({
    type: 'text',
    placeholder: 'Search by Name',
    initial_value: ''
  });

  function performSearch() {
    props.updateSearchTerm(name);
  }

  return(
    <div>
      {nameInput}
      <Button primary onClick={() => performSearch()}> Search </Button>  
    </div>
    
  )
}
