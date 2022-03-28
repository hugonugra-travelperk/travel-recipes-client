import React, { useState, useEffect } from "react";
import useAxios from '../../hooks/useAxios'
import RecipeElement from "./RecipeElement"
import SearchBox from "./SearchBox"

export default function RecipesList(){
  const base_path = '/recipes/'
  const [searchTerm, setSearchTerm] = useState('')

  const { dispatch, response, loading, error } = useAxios({
    method: 'GET',
    url: searchTerm ? base_path + '?name=' + searchTerm : base_path,
  }, () => {})

  useEffect(() => {
    dispatch();
  }, [searchTerm]);

  function updateSearchTerm(term) {
    setSearchTerm(term);
  }

  return(
    <>
      <SearchBox
        updateSearchTerm={updateSearchTerm}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {response && response.map(function(item){
        return (
          <RecipeElement
            detail={false}
            key={item.id}
            recipe={item}
          />
        )
      })}
    </>
    
  )
}
