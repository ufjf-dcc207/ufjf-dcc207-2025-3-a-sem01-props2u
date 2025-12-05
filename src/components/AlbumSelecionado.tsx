import type { Album } from '../dados.ts';
import { AlbumHeader } from './AlbumHeader.tsx';
import { Tracklist } from './Tracklist.tsx';
import './AlbumView.css';

interface AlbumSelecionadoProps { 
    album: Album
}

export function AlbumSelecionado({album}:AlbumSelecionadoProps) { 
  return (
    <div className="album-selecionado"> 
      <header className="header-album-selecionado">
        {
            <AlbumHeader album={album}/>

        }
      </header>
        <main className="tracklist-album-selecionado">
        {
            <Tracklist musicas={album.tracklist}/>
        }
      </main>

    </div>
  );
}