# To-Do List App

Aplicación simple para gestionar tareas pendientes.

## **Estructura del Proyecto**

```
to-do-app/
│-- backend/
│   ├─ server.js
│   ├─ package.json
│   └─ tasks.json
│
│-- frontend/
│   ├─ public/
│   ├─ src/
│   │   ├─ App.js
│   │   ├─ index.js
│   │   ├─ components/
│   │   │   ├─ TaskList.js
│   │   │   ├─ TaskForm.js
│   │   │   └─ TaskDetails.js
│   └─ package.json
│
└-- README.md
```

## 🚀 **Cómo ejecutar el proyecto**

### 1. **Backend**

1. Navega a la carpeta `backend` e instala las dependencias:

   ```bash
   cd backend
   npm install
   ```

2. Inicia el servidor:

   ```bash
   node server.js
   ```

   El backend se ejecutará en `http://localhost:5000`.

### 2. **Frontend**

1. Navega a la carpeta `frontend` e instala las dependencias:

   ```bash
   cd frontend
   npm install
   ```

2. Inicia el frontend:

   ```bash
   npm start
   ```

   El frontend se ejecutará en `http://localhost:3000`.

## 📦 **Funcionalidades**

1. **Agregar Tareas**: Especifica nombre, descripción y tipo (trabajo, casa, negocios).
2. **Listar Tareas**: Muestra todas las tareas pendientes.
3. **Eliminar Tareas**: Elimina una tarea específica.
4. **Detalles de Tareas**: Visualiza detalles al seleccionar una tarea.

## 🛠️ **Tecnologías Utilizadas**

- **Frontend**: React
- **Backend**: Node.js, Express
- **Base de Datos**: Archivo `tasks.json` como almacenamiento temporal