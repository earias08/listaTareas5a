import React from "react";

const ListaTarea = (props) => {
  // codigo de javascript
  console.log(props.tareas);

  return (
    //   aqui puedo seguir con js
    <ul className="list-group">
      {/* aqui ya es html */}
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
};

export default ListaTarea;
