import { ImagemEstilizada } from "@/ui/styles/Components/Imagem/styles";
import React from "react";

interface ImagemProps {
  url: string;
  alt: string;
}

const Imagem: React.FC<ImagemProps> = ({ url, alt }) => {
  return <ImagemEstilizada src={url} alt={alt} />;
};

export default Imagem;
