import { EstiloTitulo } from "@/ui/styles/Components/Titulo/styles";
import React from "react";

interface TituloProps {
  texto: string;
}

const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return <EstiloTitulo>{texto}</EstiloTitulo>;
};

export default Titulo;
