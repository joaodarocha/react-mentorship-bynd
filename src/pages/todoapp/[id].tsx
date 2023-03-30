import React, { useEffect, useState } from 'react';
import { TaskItem } from '@/components/TaskItem';
import { InputForm } from '@/components/InputForm';
import { useRouter } from 'next/router';
import Link from 'next/link';


export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TaskList() {
  const router = useRouter();
  const { id } = router.query;
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (id) {
      const tasksAsString = window.localStorage.getItem(id.toString());
      if (tasksAsString) {
        const tasksFromLocalStorage = JSON.parse(tasksAsString);

        console.log(tasksFromLocalStorage)
        if (tasksFromLocalStorage) {
          setTasks(tasksFromLocalStorage.tasks);
        }
      }
    }
  }, [])

  useEffect(() => {
    console.log('tasks changed');
    console.log('New tasks:', JSON.stringify(tasks));
    if (id) {
      window.localStorage.setItem(id.toString(), JSON.stringify({ id: id, tasks: tasks }))
    }
  }, [tasks])

  const handleAdd = (text: string) => {
    if (text.trim() === '') return;

    const newTodo: Task = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    console.log('Old tasks:', JSON.stringify(tasks));
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
      <Link href="/todoapp">← Back to home</Link>
      <h1 className="title">Todo List</h1>
      <InputForm onAdd={handleAdd}/>
      <ul className="todo-list">
        {tasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onRemove={handleRemove}/>
        ))}
      </ul>
    </div>
  );
}


