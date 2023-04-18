import { TodoList } from '@/components/pages/TodoAppPage';
import { Task } from '@/components/pages/TodoPage';

const baseUrl = 'https://6436d9183e4d2b4a12dd4e1b.mockapi.io/api'

const enum ENDPOINTS {
  BASE_URL = baseUrl,
  TODOLIST = `${baseUrl}/todolist`
}

export const getAllTodoLists = async () => {
  const response = await fetch(ENDPOINTS.TODOLIST)
  const todoLists: TodoList[] = await response.json();

  return todoLists;
}

export const createTodoList = async () => {

  const response = await fetch(ENDPOINTS.TODOLIST,
    {
      method: 'POST',
    })

  return response.json();
}

export const deleteTodoList = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.TODOLIST}/${id}`,
    {
      method: 'DELETE',
    });

  return response.json();
}

export const getTodoList = async (id: number) => {
  const response = await fetch(`${ENDPOINTS.TODOLIST}/${id}`);
  return response.json();
}

export const getTasks = async (todoListId: number) => {
  const response = await fetch(`${ENDPOINTS.TODOLIST}/${todoListId}/task`);
  return response.json();
}

export const createTask = async (todoListId: number, text: string) => {
  if (text.trim() === '') return;

  const newTask: Task = {
    id: Date.now(),
    text: text,
    completed: false,
  };

  const response = await fetch(`${ENDPOINTS.TODOLIST}/${todoListId}/task`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newTask)
    });

  return response.json();
}

export const removeTask = async (todoListId: number, taskId: number) => {
  const response = await fetch(`${ENDPOINTS.TODOLIST}/${todoListId}/task/${taskId}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
  return response.json();
}

export const toggleTask = async (todoListId: number, task: Task) => {

  const response = await fetch(`${ENDPOINTS.TODOLIST}/${todoListId}/task/${task.id}`,
    {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(task)
    });
  return response.json();
}
