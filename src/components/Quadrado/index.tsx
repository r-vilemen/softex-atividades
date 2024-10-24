import React from "react";
import { QuadradoEstilizado } from "@/ui/styles/Components/Quadrado/styles";

interface QuadradoProps {
  cor?: string;
  tamanho?: string;
}

const Quadrado: React.FC<QuadradoProps> = ({ cor, tamanho }) => {
  return <QuadradoEstilizado $cor={cor} $tamanho={tamanho} />;
};

export default Quadrado;
