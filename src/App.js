import './App.css';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subtitulo from './components/Subtitulo';

function App() {
  return (
    <div>
      {/*Esto es un class component*/}
      <Titulo/>
      <Subtitulo></Subtitulo>
    </div>
  );
}

export default App;
