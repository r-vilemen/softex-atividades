import React from "react";
import {
  ListaEstilizada,
  ItemEstilizado,
} from "@/ui/styles/Components/ListaItens/styles";

interface ListaItensProps {
  itens: string[];
}

const ListaItens: React.FC<ListaItensProps> = ({ itens }) => {
  return (
    <ListaEstilizada>
      {itens.map((item, index) => (
        <ItemEstilizado key={index}>{item}</ItemEstilizado>
      ))}
    </ListaEstilizada>
  );
};

export default ListaItens;
