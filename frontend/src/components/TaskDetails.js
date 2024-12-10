import React from 'react';

const TaskDetails = ({ task }) => {
  if (!task) return <p>Seleccione una tarea para ver detalles.</p>;

  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <p>Tipo: {task.type}</p>
    </div>
  );
};

export default TaskDetails;
