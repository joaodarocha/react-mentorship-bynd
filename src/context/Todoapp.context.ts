import { createContext, Dispatch, SetStateAction } from 'react';
import { TodoList } from '@/pages/todoapp';
import { Task } from '@/pages/todoapp/[id]';


export interface TodoAppContextType {
  todoLists: TodoList[],
  setTodoLists: Dispatch<SetStateAction<TodoList[]>>

  getTodoList(todoListId: number): TodoList | undefined;
  removeTodoList(todoListId: number): void;
  addTask(todoListId: number, newTask: Task): void;
  removeTask(todoListId: number, taskId: number): void;
  updateTask(todoListId: number, task: Task): void;
  createTodoList(): void;
}

export const TodoappContext = createContext({} as TodoAppContextType);
