import React, { useState } from "react";
import {Input, InputArea} from '../components/base/Input'

export default function useInput({type, placeholder, initial_value=''}) {
  const [value, setValue] = useState(initial_value);

  let inputElement = 
    <Input
      placeholder={placeholder}
      defaultValue={value}
      onChange={e => setValue(e.target.value)}
      type={type}
    />;
  
  if (type==='area') {
    inputElement =
    <InputArea
      placeholder={placeholder}
      defaultValue={value}
      rows="3"
      cols="30"
      onChange={e => setValue(e.target.value)}
      type={type}
    />;
  }

  const input = inputElement;

  function reset() {
    setValue('');
  }

  return [value, input, reset];
}
