import React from "react";
import { BotaoEstilizado } from "@/ui/styles/Components/Botao/styles";

interface BotaoProps {
  texto: string;
  cor?: string;
  tamanho?: string;
  onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, cor, tamanho, onClick }) => {
  return (
    <BotaoEstilizado $cor={cor} $tamanho={tamanho} onClick={onClick}>
      {texto}
    </BotaoEstilizado>
  );
};

export default Botao;
