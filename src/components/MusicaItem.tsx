import type {Musica} from '../dados.ts';
import './MusicaItem.css';

export interface MusicaItemProps {
  musica: Musica,
}

export function MusicaItem({musica}:MusicaItemProps) {
    return (
        <li className="musica-item">
            <h3>{musica.titulo}</h3>
        </li>
    )
}