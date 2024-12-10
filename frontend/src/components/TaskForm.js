import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/tasks', { name, description, type, completed: false });
    fetchTasks();
    setName('');
    setDescription('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input placeholder="Tipo" value={type} onChange={(e) => setType(e.target.value)} required />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
};

export default TaskForm;
