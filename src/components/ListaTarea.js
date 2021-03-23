import React from "react";
import TareaIndividual from "./TareaIndividual";

const ListaTarea = (props) => {
  // codigo de javascript
  // console.log(props.tareas);

  return (
    //   aqui puedo seguir con js
    <ul className="list-group">
      {/* aqui ya es html */}
      {props.tareas.map((dato, indice) => (
        <TareaIndividual nombreTarea={dato} key={indice}></TareaIndividual>
      ))}
    </ul>
  );
};

export default ListaTarea;
