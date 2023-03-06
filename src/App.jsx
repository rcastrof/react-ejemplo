/* rfce crea el componente de manera rapida */
/* imp crea el import rapido */

import TaskForm from "./components/TaskForm";
import React from "react";
import TaskList from "./components/TaskList";
export default function App() {

  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList />
      </div>
    </main>
  );
}
