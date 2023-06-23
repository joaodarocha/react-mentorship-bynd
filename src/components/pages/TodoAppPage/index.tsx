import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { createTodoList, deleteTodoList } from '@/utils/api';
import { Task } from '@/components/pages/TodoPage';

export type TodoAppPageProps = {
  initialTodoLists: TodoList[]
};

export interface TodoList {
  createdAt: Date
  id: number,
  tasks: Task[],
  title: string
}

export const TodoAppPage: NextPage<TodoAppPageProps> = (
  {
    initialTodoLists
  }
) => {
  const [todoLists, setTodoLists] = useState(initialTodoLists);

  const handleCreateTodoList = async () => {
    createTodoList()
    .then((newTodoList) => {
      setTodoLists([...todoLists, newTodoList]);
    })
  }

  const handleRemoveTodoList = async (id: number) => {
    deleteTodoList(id)
    .then(() => {
      setTodoLists(todoLists.filter(todolist => todolist.id === id));
    });
  }

  return (
    <div>
      <Link href="/">← Back to home</Link>
      <h1 className="title">Welcome to the TodoApp!</h1>
      <button className="create-todo-button button" onClick={handleCreateTodoList}>Create
        TodoList
      </button>
      {todoLists && <ul className="todo-app">
        {todoLists.map((todoList: TodoList) => (
          <div key={todoList.id}>
            <Link href={'/todoapp/' + todoList.id}>TodoList {todoList.id}</Link>
            <button className="button"
                    onClick={() => handleRemoveTodoList(todoList.id)}>
              🗑️ Delete
            </button>
          </div>
        ))}
      </ul>
      }
    </div>
  );
}
