import type { Album } from '../dados.ts';
import { AlbumHeader } from './AlbumHeader.tsx';
import { Tracklist } from './Tracklist.tsx';
import './AlbumView.css';

interface AlbumViewProps { 
    album: Album
}

//segunda parte da cascata. note como os componentes vao ficando cada vez "menores"
export function AlbumView({album}:AlbumViewProps) { 
  return (
    //ele recebe o album do App.tsx e separa ele em albumheader e tracklist
    <div className="album-view"> 
      <header>
        {// ele manda pra um profissional renderizar a header do album
            <AlbumHeader album={album}/>
        }
      </header>
      
      <main>
        {// ele manda pra um profissional renderizar a tracklist do album
            <Tracklist musicas={album.tracklist}/>
        }
      </main>
    </div>
  );
}