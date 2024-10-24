import styled from "styled-components";

interface BotaoEstilizadoProps {
  $cor?: string;
  $tamanho?: string;
}

export const BotaoEstilizado = styled.button<BotaoEstilizadoProps>`
  background-color: ${({ $cor }) => $cor || "blue"};
  font-size: ${({ $tamanho }) => $tamanho || "16px"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
