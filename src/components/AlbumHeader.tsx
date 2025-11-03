import type {Album} from '../dados.ts';
import './AlbumHeader.css';

export interface AlbumHeaderProps {
    album: Album;
}

export function AlbumHeader({ album }: AlbumHeaderProps) {
  return (

    <div className="album-header">
      <h2>{album.titulo}</h2>
      <h3>{album.ano}</h3>
      <ul>
        {album.estilos.map((estilo) => (
          <li key={estilo}>
            {estilo}
          </li>
        ))}
      </ul>
    </div>
  );
}