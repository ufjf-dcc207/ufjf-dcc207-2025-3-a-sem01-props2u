import type {Musica} from '../dados.ts';
import './MusicaItem.css';

export interface MusicaItemProps {
  musica: Musica,
}

// o final da cascata. que recebe a musica de uma tracklist, que recebeu uma tracklist de um album, que recebeu um album de um artista
export function MusicaItem({musica}:MusicaItemProps) {
    return (
        <li className="musica-item">
            <h3>{musica.titulo}</h3>
        </li>
    )
}