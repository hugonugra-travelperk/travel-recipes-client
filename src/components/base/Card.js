import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 3em;
  margin: 2em;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 0.25rem;
  box-shadow: 0 3em 4em -1em rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CardHeader = styled.header`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  font-size: 1.75em;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 1em;
  padding-left: 1em;
  padding-top: 0.75em;
  font-size: 1em;
  margin: 2em;
  border: 0.1em solid blue;
`;

export const CardSubHeader = styled.header`
  padding-top: 0.2em;
  padding-bottom: 0.2em;
  font-size: 1.25em;
  font-weight: bold;
  text-align: center;
`;

export const CardSubBody = styled.div`
  padding: 1em;
  font-size: 1em;
  text-align: center;
  background: blue;
  margin-top: 0.8em;
  border-radius: 0.5rem;
`;
