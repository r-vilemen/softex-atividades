import React from "react";
import Rodape from "../Footer";
import Cabecalho from "../Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Cabecalho
        titulo="Atividade da Softex"
        descricao="Este é um exemplo de cabeçalho com um título e uma descrição personalizáveis."
      />
      <main>{children}</main>
      <Rodape informacoes="© 2024 Atividade Softex. Todos os direitos reservados." />
    </>
  );
};

export default Layout;
