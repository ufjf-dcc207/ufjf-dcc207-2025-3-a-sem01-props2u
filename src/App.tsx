import { AlbumView } from './components/AlbumView';
import { discografiaJPEGMAFIA } from './dados'; 
import { FotoArtista } from './FotoArtista';

import "./App.css";

function App() {


  return (
    <div className="app-container">
      <section className="foto-artista-grid">
      <h1>Discografia de JPEGMAFIA</h1>
      <FotoArtista/>
      </section>
      <section className="discografia-grid">

      {discografiaJPEGMAFIA.map((album) => (

        <AlbumView key={album.id} album={album} />
        ))}
      </section>
    </div>
  );
}

export default App;