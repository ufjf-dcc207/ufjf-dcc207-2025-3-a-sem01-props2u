import { AlbumView } from './components/AlbumView';
import { discografiaJPEGMAFIA } from './dados';  
import "./App.css";

  

function App() {


  return (
    <div className="app-container">
      <h1>Discografia de JPEGMAFIA</h1>
      <section className="discografia-grid">
        { discografiaJPEGMAFIA.map((album)=>
        <li key={album.id}>
          <AlbumView album={album}/>
        </li>
        ) }
      </section>
    </div>
  );
}

export default App;