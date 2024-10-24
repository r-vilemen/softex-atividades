import styled from "styled-components";

interface QuadradoEstilizadoProps {
  $cor?: string;
  $tamanho?: string;
}

export const QuadradoEstilizado = styled.div<QuadradoEstilizadoProps>`
  background-color: ${({ $cor }) => $cor || "gray"};
  width: ${({ $tamanho }) => $tamanho || "100px"};
  height: ${({ $tamanho }) => $tamanho || "100px"};
`;
