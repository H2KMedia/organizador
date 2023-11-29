import './App.css';
import Tarea from './componentes/Tarea';
import TareaFormulario from './componentes/TareaFormulario';
import ListaDeTareas from './componentes/ListaDeTareas';
import ImagenComponent from './componentes/Icon';

function App() {
  return (
    <div className="App">
      <div className='contenedor-logo'>
        <ImagenComponent />
      </div>
      <div className='mis-tareas-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

