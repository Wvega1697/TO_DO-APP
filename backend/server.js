// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ruta para obtener todas las tareas
app.get('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
  res.json(tasks);
});

// Ruta para agregar una nueva tarea
app.post('/tasks', (req, res) => {
  const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
  const newTask = req.body;
  tasks.push(newTask);
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
  res.json(newTask);
});

// Ruta para eliminar una tarea
app.delete('/tasks/:name', (req, res) => {
  let tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf-8'));
  tasks = tasks.filter(task => task.name !== req.params.name);
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
  res.json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
