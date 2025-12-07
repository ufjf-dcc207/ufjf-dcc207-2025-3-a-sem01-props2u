import type { Album } from '../dados.ts';
import { AlbumHeader } from './AlbumHeader.tsx';
import { Tracklist } from './Tracklist.tsx';
import './AlbumView.css';
import './AlbumSelecionado.css';

interface AlbumSelecionadoProps { 
    album: Album
    fechar: () => void
}


export function AlbumSelecionado({album,fechar}:AlbumSelecionadoProps) { 
  return (
    <div className="album-selecionado"> 

    <div className="cartao">
    <button className="botao-fechar" onClick={fechar}>X</button>
      <header className="header-album-selecionado">
            <AlbumHeader album={album}/>
      </header>
        <main className="tracklist-album-selecionado">
        {
            <Tracklist musicas={album.tracklist}/>
        }
      </main>
      </div>
    </div>
  );
}