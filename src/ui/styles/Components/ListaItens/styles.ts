import styled from "styled-components";

export const EstiloLista = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const EstiloItem = styled.li`
  padding: 10px;
  background-color: #f4f4f4;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 1rem;
  color: black;

  &:nth-child(even) {
    background-color: #eaeaea;
  }
`;
