import React, { useState} from "react"; 
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas() {

  const [tareas, setTarea] = useState([]);

  const agregarTarea= tarea => {
    
    console.log(tarea);
    if(tarea.texto.trim()){
      const tareasActualizadas=[tarea,...tareas];
      setTarea(tareasActualizadas);
    }
  }

  const eliminarTarea = (id) => {
    const confirmacionEliminar = window.confirm("¿Estás seguro que completaste la tarea?");
    if (confirmacionEliminar) {
    console.log('Eliminando tarea');
      const tareasActualizadas=tareas.filter(tarea => tarea.id !== id);
      setTarea(tareasActualizadas);
}
}

  const completarTarea= (id) =>{
    const tareasActualizadas = tareas.map( tarea =>
      {
        if (tarea.id == id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      }
    );
    setTarea(tareasActualizadas);
  }

  return(
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div>
        {
          tareas.map( (tarea) =>
            <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
        }  
      </div>
    </>
  )

}

export default ListaDeTareas;