import { DivQuadrado } from "@/ui/styles/Components/Quadrado/styles";
import React from "react";

interface QuadradoProps {
  cor: string;
  tamanho: number;
}

const Quadrado: React.FC<QuadradoProps> = ({ cor, tamanho }) => {
  return <DivQuadrado cor={cor} tamanho={tamanho} />;
};

export default Quadrado;
