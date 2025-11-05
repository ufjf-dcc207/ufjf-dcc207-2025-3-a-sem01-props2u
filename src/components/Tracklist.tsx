import type {Musica} from '../dados';
import {MusicaItem} from './MusicaItem';

interface TracklistProps {
  musicas: Musica[]
}

//a terceira parte da cascata, recebe (adivinha) uma lista de tracks/musicas
export function Tracklist({musicas}: TracklistProps) { 
  return (
    <ul>
      { // ele manda pra um profissional renderizar cada musica singular
      musicas.map((musica) => <MusicaItem musica={musica}/>
      )}
    </ul>
  );
}