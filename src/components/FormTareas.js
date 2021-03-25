import React, { useState, Fragment, useEffect } from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
  // aqui escribo codigo de js
  // traer datos del localstorage
  let tareasLS = JSON.parse(localStorage.getItem('tareasKey'));
  // crear un state
  const [tareas, setTareas] = useState(tareasLS);
  const [tarea, setTarea] = useState("");

  // ciclo de vida de un componente
  useEffect(()=>{
    // console.log(tareasLS);
    if(tareasLS){
      // el localstorage tiene algo y tengo que actualizar sus datos
      console.log('actualizar LS');
      localStorage.setItem('tareasKey', JSON.stringify(tareas))
    }else{
      console.log('el LS no tiene nada');
      localStorage.setItem('tareasKey', JSON.stringify([]));
    }

  },[tarea, tareas]);

  // const guardarTarea = (e) => {
  //     // obtengo el value del input
  //     // console.log(e.target.value);
  //     // guardar en el state
  //     setTarea(e.target.value);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("prueba");
    let arreglo = tareas;
    arreglo.push(tarea);
    // actualizar en el state que tiene la lista de tareas
    setTareas(arreglo);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) =>{
    let listaTareasModificado = tareas.filter((unaTarea)=> unaTarea !== nombreTarea);
    console.log(listaTareasModificado);
    // actualizar el state
    setTareas(listaTareasModificado);
  }

  return (
    <Fragment>
      <div className="container my-5 d-flex justify-content-center">
        {/* esto es un comentario dentro del html */}
        <form className="w-75" onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Agregar una tarea"
              value={tarea}
              onChange={(e) => setTarea(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <section className='container w-50 my-5'>
        {/* invoco al componente lista de tareas */}
        <ListaTarea tareas={tareas} borrarTareaIndividual={borrarTarea}></ListaTarea>
      </section>
    </Fragment>
  );
};

export default FormTareas;
