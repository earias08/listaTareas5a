import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import FormTareas from './components/FormTareas';

function App() {
  return (
    <div>
      {/*Esto es un class component*/}
      <Titulo nuevoprop='prueba'/>
      <Subtitulo comision='5A' prueba={true}></Subtitulo>
      <FormTareas></FormTareas>
    </div>
  );
}

export default App;
