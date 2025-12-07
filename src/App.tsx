import { AlbumView } from './components/AlbumView';
import { AlbumSelecionado } from './components/AlbumSelecionado';
import { useState } from 'react';
import { discografiaJPEGMAFIA } from './dados'; 
import { FotoArtista } from './components/FotoArtista.tsx';
import type { Album } from './dados.ts';

import "./App.css";

function App() {

  const [albumClicado,setAlbumClicado] = useState<Album | null>(null);
  
  return (
    <div className="app-container">
      <section className="foto-artista-grid">
      <h1>Discografia de JPEGMAFIA</h1>
      <FotoArtista/>
      </section>
      <section className="discografia-grid">

      {discografiaJPEGMAFIA.map((album) => (
        <button className="botao-album"onClick={() =>{
          album && setAlbumClicado(album);
        }}>
        <AlbumView key={album.id} album={album}/>
        </button>
        ))}
      </section>
      {albumClicado && <AlbumSelecionado album={albumClicado} fechar={() => {setAlbumClicado(null)}}/>}
    </div>
  );
}

export default App;