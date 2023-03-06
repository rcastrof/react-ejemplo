import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [titulo, setTitle] = useState("");
  const [descripcion, setDescription] = useState("");
  useContext(TaskContext);

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titulo, descripcion);

    createTask({
      titulo,
      descripcion,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10  mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white">Crea tu tarea</h1>
        <input placeholder="Titulo" className="bg-slate-300 p-3 w-full mb-2" onChange={(e) => setTitle(e.target.value)} value={titulo} />
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion"
          value={descripcion}
        />
        <button className="bg-indigo-300 px-3 py-1 text-white">Agregar</button>
      </form>
    </div>
  );
}

export default TaskForm;
