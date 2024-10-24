import React from "react";
import SEO from "@/components/SEO";
import { HomePageTextsSEO } from "@/components/SEO/seoTexts";
import Quadrado from "@/components/Quadrado";
import Titulo from "@/components/Titulo";
import { Container } from "@/ui/styles/Pages/home/styles";
import Botao from "@/components/Botao";

export default function Home() {
  const seoText = HomePageTextsSEO;

  return (
    <Container>
      <SEO
        title={seoText.title}
        description={seoText.description}
        keywords={seoText.keywords}
        author={seoText.author}
        url={seoText.url}
        image={seoText.image}
      />
      <div>
        <h4>Componente quadrado</h4>
        <Quadrado cor="blue" tamanho={100} />
      </div>
      <div>
        <h4>Componente de Título</h4>
        <Titulo texto="Título de exemplo" />
      </div>
      <div>
        <h4>Componente de Título</h4>
        <Botao texto="Clique aqui" onClick={() => alert("Botão clicado!")} />
      </div>
    </Container>
  );
}
