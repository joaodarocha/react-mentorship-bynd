import React, { useContext } from 'react';
import Link from 'next/link';
import { Task } from '@/pages/todoapp/[id]';
import { TodoappContext, TodoAppContextType } from '@/context/Todoapp.context';

export interface TodoList {
  id: number,
  tasks: Task[];
}

export default function TodoApp() {
  const context = useContext<TodoAppContextType>(TodoappContext);

  const createTodoList = () => {
    context.createTodoList();
  }

  const removeTodoList = (id: number) => {
    context.removeTodoList(id);
  }

  return (
    <div>
      <Link href="/">← Back to home</Link>
      <h1 className="title">Welcome to the TodoApp!</h1>
      <button className="create-todo-button button" onClick={createTodoList}>Create
        TodoList
      </button>
      <ul className="todo-app">
        {context.todoLists.map((todoList: TodoList) => (
          <div key={todoList.id}>
            <Link href={'/todoapp/' + todoList.id}>TodoList {todoList.id}</Link>
            <button className="button" onClick={() => removeTodoList(todoList.id)}>
              🗑️ Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
