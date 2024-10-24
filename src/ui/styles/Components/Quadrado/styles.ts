import styled from "styled-components";

interface QuadradoProps {
  cor: string;
  tamanho: number;
}

export const DivQuadrado = styled.div<QuadradoProps>`
  width: ${(props) => props.tamanho}px;
  height: ${(props) => props.tamanho}px;
  background-color: ${(props) => props.cor};
`;
