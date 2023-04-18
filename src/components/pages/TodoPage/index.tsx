import { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { InputForm } from '@/components/InputForm';
import { TaskItem } from '@/components/TaskItem';
import { TodoList } from '@/components/pages/TodoAppPage';
import { createTask, getTasks, removeTask, toggleTask } from '@/utils/api';

export type TodoPageProps = {
  todoList: TodoList,
  initialTasks: Task[]
}

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoPage: NextPage<TodoPageProps> = (
  {
    todoList,
    initialTasks
  }) => {

  const [tasks, setTasks] = useState(initialTasks);

  const handleAdd = async (text: string) => {
    createTask(todoList.id, text)
    .then(async () => {
      setTasks(await getTasks(todoList.id));
    });
  };

  const handleToggle = (task: Task) => {
    task.completed = !task.completed;
    toggleTask(todoList.id, task)
    .then(async () => {
      setTasks(await getTasks(todoList.id));
    });
  };

  const handleRemove = (taskId: number) => {
    removeTask(todoList.id, taskId)
    .then(async () => {
      setTasks(await getTasks(todoList.id))
    })
  };

  return (
    <div>
      <Link href="/todoapp">← Back to home</Link>
      <h1 className="title">{todoList.title} 🗒️</h1>
      <InputForm onAdd={handleAdd}/>
      <ul className="todo-list">
        {tasks?.map((task: Task) => (
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
