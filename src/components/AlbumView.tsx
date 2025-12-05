import type { Album } from '../dados.ts';
import { AlbumHeader } from './AlbumHeader.tsx';

import './AlbumView.css';

interface AlbumViewProps { 
    album: Album
}

export function AlbumView({album}:AlbumViewProps) { 
  return (
    <div className="album-view"> 
      <header>
        {
            <AlbumHeader album={album}/>
        }
      </header>
      

    </div>
  );
}