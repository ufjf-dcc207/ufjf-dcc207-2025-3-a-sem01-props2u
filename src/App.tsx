import { AlbumView } from './components/AlbumView';
import { discografiaJPEGMAFIA } from './dados';  
import "./App.css";

// o inicio da cascata
function App() {


  return (
    <div className="app-container">
      <h1>Discografia de JPEGMAFIA</h1>
      <section className="discografia-grid">
      {/*o .map() é uma funcao anonima, tipo o lambda do python
      pra cada album da discografia, a gente cria um componente albumview*/}
      {discografiaJPEGMAFIA.map((album) => (
        /* a key é a forma do react saber diferenciar os albums.
        a gente passa o objeto album inteiro para o componente AlbumView. */
        <AlbumView key={album.id} album={album} />
        ))}
      </section>
    </div>
  );
}

export default App;