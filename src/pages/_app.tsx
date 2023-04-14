import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { TodoList } from '@/pages/todoapp';
import { TodoappContext, TodoAppContextType } from '@/context/Todoapp.context';
import { Task } from '@/pages/todoapp/[id]';

export default function App({ Component, pageProps }: AppProps) {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const contextValue: TodoAppContextType = {
    todoLists,
    setTodoLists,
    getTodoList(id: number) {
      return todoLists.find(todoList => todoList.id === id);
    },
    addTask(todoListId: number, newTask: Task) {
      const index = todoLists.findIndex(todoList => todoList.id === todoListId)
      const newTodoLists = [...todoLists];

      newTodoLists[index].tasks = [...todoLists[index].tasks, newTask];

      setTodoLists(newTodoLists);
    },
    removeTask(todoListId: number, taskId: number) {
      const index = todoLists.findIndex(todoList => todoList.id === todoListId)
      const newTodoLists = [...todoLists];

      newTodoLists[index].tasks = todoLists[index].tasks.filter(task => task.id !== taskId)
      setTodoLists(newTodoLists);
    },
    updateTask(todoListId: number, newTask: Task) {
      const index = todoLists.findIndex(todoList => todoList.id === todoListId)
      const newTodoLists = [...todoLists];

      const taskIndex = todoLists[index].tasks.findIndex(task => task.id === newTask.id)

      newTodoLists[index].tasks[taskIndex] = newTask;

      setTodoLists(newTodoLists);
    },
    removeTodoList(todoListId: number) {
      setTodoLists([...todoLists.filter(todoList => todoList.id !== todoListId)])
    },
    createTodoList() {
      const newTodoList: TodoList = {
        id: todoLists.length + 1,
        tasks: []
      }
      setTodoLists([...todoLists, newTodoList]);
    }
  };

  return (
    <TodoappContext.Provider value={contextValue}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </TodoappContext.Provider>
  )
}
