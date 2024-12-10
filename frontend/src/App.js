import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/tasks');
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} setSelectedTask={setSelectedTask} />
      <TaskDetails task={selectedTask} />
    </div>
  );
}

export default App;
