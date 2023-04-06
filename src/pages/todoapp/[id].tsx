import React, { useContext, useMemo } from 'react';
import { TaskItem } from '@/components/TaskItem';
import { InputForm } from '@/components/InputForm';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TodoappContext } from '@/context/Todoapp.context';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TaskList() {
  const router = useRouter();
  const todoListId = Number(router.query.id || 0);
  const context = useContext(TodoappContext);

  const todoList = useMemo(() => {
    return context.getTodoList(todoListId);
  }, [todoListId, context]);

  const handleAdd = (text: string) => {
    if (text.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    context.addTask(todoListId, newTask);
  };

  const handleToggle = (task: Task) => {
    task.completed = !task.completed;
    context.updateTask(todoListId, task);
  };

  const handleRemove = (taskId: number) => {
    context.removeTask(todoListId, taskId);
  };

  return (
    <div className="container">
      <Link href="/todoapp">← Back to home</Link>
      <h1 className="title">Todo List 🗒️</h1>
      <InputForm onAdd={handleAdd}/>
      <ul className="todo-list">
        {todoList?.tasks.map((task: Task) => (
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


