import React from 'react';
import { TodoAppPage, TodoAppPageProps } from '@/components/pages/TodoAppPage';
import { GetStaticProps } from 'next';
import { getAllTodoLists } from '@/utils/api';

export default TodoAppPage;

// TODO: I can't use getStaticPaths since this is not a dynamic route?

export const getStaticProps: GetStaticProps<TodoAppPageProps> = async () => {
  const todoLists = await getAllTodoLists();

  return {
    props: {
      initialTodoLists: todoLists
    }
  }
}
