import React, { useState } from 'react';
import Link from 'next/link';
import { Task } from '@/pages/todoapp/[id]';

export interface TodoList {
  id: number,
  tasks: Task[];
}

export default function TodoApp() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  const createTaskList = () => {
    const newList: TodoList = {
      id: todoLists.length + 1,
      tasks: []
    }
    setTodoLists([...todoLists, newList]);
    window.localStorage.setItem(newList.id.toString(), JSON.stringify(newList) )
  }

  const removeTaskList = (id: number) => {
    setTodoLists(existingTodoList => existingTodoList.filter(todoList => todoList.id !== id))
  }

  return (
    <div>
      <Link href="/">← Back to home</Link>
      <button onClick={createTaskList}>Create TodoList</button>
      <ul className="todo-app">
        {todoLists.map((todoList: TodoList) => (
          <div key={todoList.id}>
            <Link href={'/todoapp/' + todoList.id}>List {todoList.id}</Link>
            <button onClick={() => removeTaskList(todoList.id)}>🗑️ Delete</button>
          </div>
        ))}
      </ul>
      {/*<TaskList></TaskList>*/}
    </div>
  );
}
