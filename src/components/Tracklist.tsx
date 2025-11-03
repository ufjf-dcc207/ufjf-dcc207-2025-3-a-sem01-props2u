import type {Musica} from '../dados';
import {MusicaItem} from './MusicaItem';

interface TracklistProps {
  musicas: Musica[]
}


export function Tracklist({musicas}: TracklistProps) { 
  return (
    <ul>
      {
      musicas.map((musica) => <MusicaItem musica={musica}/>
      )}
    </ul>
  );
}