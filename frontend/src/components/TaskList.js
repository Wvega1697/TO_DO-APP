import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks, setSelectedTask }) => {
  const handleDelete = async (name) => {
    await axios.delete(`http://localhost:5000/tasks/${name}`);
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} onClick={() => setSelectedTask(task)}>
          {task.name} - {task.type}
          <button onClick={() => handleDelete(task.name)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
