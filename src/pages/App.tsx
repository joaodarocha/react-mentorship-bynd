import React, { useState } from 'react';
import InputForm from '@/components/InputForm';
import { TaskList } from '@/components/TaskList';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}


export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAdd = (text: string) => {
    if (text.trim() === '') return;

    const newTodo: Task = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTasks(prevTodos =>
      prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          else {
            return todo;
          }
        }
      ),
    );
  };

  const handleRemove = (id: number) => {
    setTasks(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <InputForm onAdd={handleAdd}/>
      <TaskList tasks={tasks} onToggle={handleToggle} onRemove={handleRemove}/>
    </div>
  );
};

