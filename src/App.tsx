import { AlbumView } from './components/AlbumView';
import { AlbumSelecionado } from './components/AlbumSelecionado';
import { useState } from 'react';
import { discografiaJPEGMAFIA } from './dados'; 
import { FotoArtista } from './FotoArtista';
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
        <button onClick={() =>{
          album && setAlbumClicado(album);
        }}>
        <AlbumView key={album.id} album={album}/>
        </button>
        ))}
        <section className="album-selecionado">
        {albumClicado && <AlbumSelecionado album={albumClicado}/>}
        </section>
        
      </section>
    </div>
  );
}

export default App;