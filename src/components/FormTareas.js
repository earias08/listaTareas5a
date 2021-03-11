import React, {useState} from "react";

const FormTareas = () => {
// aqui escribo codigo de js
// crear un state
const [tareas, setTareas] = useState([]);
const [tarea, setTarea] = useState('');

// const guardarTarea = (e) => {
//     // obtengo el value del input
//     // console.log(e.target.value);
//     // guardar en el state
//     setTarea(e.target.value);
// }
const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('prueba');
    let arreglo = tareas;
    arreglo.push(tarea);
    // actualizar en el state que tiene la lista de tareas
    setTareas(arreglo);
}

  return (
    <div className='container my-5 d-flex justify-content-center'>
      {/* esto es un comentario dentro del html */}
      <form className='w-75' onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Agregar una tarea"
            onChange = {(e)=> setTarea(e.target.value)}
          />
          <button className='btn btn-outline-light' type='submit'>Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default FormTareas;
