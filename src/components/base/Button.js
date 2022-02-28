import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "blue" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.25em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  &:hover {
    background: #ffc726;
  }
  &:active {
    background: lightblue;
  }
`;
