
import { useState } from 'react';
import './FotoArtista.css'; 

const fotos = [
    "https://f4.bcbits.com/img/0017910299_0",
    "https://f4.bcbits.com/img/a3251624428_16.jpg",
];

export function FotoArtista() {
  

  const [indiceAtual, setIndiceAtual] = useState(0);


  function proximaFoto() {
    setIndiceAtual((indiceAtual + 1)% fotos.length);
  }

  return (
    <div className="foto-artista-container">
      <button className="button-container" onClick={proximaFoto}>
      <img className="foto-container" src={fotos[indiceAtual]} alt="Foto do Artista" />
      </button>

    </div>
  );
}