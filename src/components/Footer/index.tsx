import {
  EstiloRodape,
  TextoRodape,
} from "@/ui/styles/Components/Footer/styles";
import React from "react";

interface RodapeProps {
  informacoes: string;
}

const Rodape: React.FC<RodapeProps> = ({ informacoes }) => {
  return (
    <EstiloRodape>
      <TextoRodape>{informacoes}</TextoRodape>
    </EstiloRodape>
  );
};

export default Rodape;
