import React from "react";
import { TituloEstilizado } from "@/ui/styles/Components/Titulo/styles";

interface TituloProps {
  texto: string;
}

const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return <TituloEstilizado>{texto}</TituloEstilizado>;
};

export default Titulo;
