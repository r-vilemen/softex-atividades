import { ParagrafoEstilizado } from "@/ui/styles/Components/Paragrafo/styles";
import React from "react";

interface ParagrafoProps {
  texto: string;
}

const Paragrafo: React.FC<ParagrafoProps> = ({ texto }) => {
  return <ParagrafoEstilizado>{texto}</ParagrafoEstilizado>;
};

export default Paragrafo;
