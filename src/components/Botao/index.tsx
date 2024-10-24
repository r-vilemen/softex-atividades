import { EstiloBotao } from "@/ui/styles/Components/Botao/styles";
import React from "react";

interface BotaoProps {
  texto: string;
  onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, onClick }) => {
  return <EstiloBotao onClick={onClick}>{texto}</EstiloBotao>;
};

export default Botao;
