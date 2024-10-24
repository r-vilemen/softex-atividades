import {
  EstiloItem,
  EstiloLista,
} from "@/ui/styles/Components/ListaItens/styles";
import React from "react";

interface ListaItensProps {
  itens: string[];
}

const ListaItens: React.FC<ListaItensProps> = ({ itens }) => {
  return (
    <EstiloLista>
      {itens.map((item, index) => (
        <EstiloItem key={index}>{item}</EstiloItem>
      ))}
    </EstiloLista>
  );
};

export default ListaItens;
