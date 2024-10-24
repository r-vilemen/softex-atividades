import {
  CabecalhoEstilizado,
  DescricaoCabecalho,
  TituloCabecalho,
} from "@/ui/styles/Components/Header/styles";
import React from "react";

interface CabecalhoProps {
  titulo: string;
  descricao: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, descricao }) => {
  return (
    <CabecalhoEstilizado>
      <TituloCabecalho>{titulo}</TituloCabecalho>
      <DescricaoCabecalho>{descricao}</DescricaoCabecalho>
    </CabecalhoEstilizado>
  );
};

export default Cabecalho;
