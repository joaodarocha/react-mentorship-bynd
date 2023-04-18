import { TodoPage } from '@/components/pages/TodoPage';
import { getTasks, getTodoList } from '@/utils/api';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'next';

export default TodoPage;

// TODO: I can't use getStaticPaths since I need getServerSideProps ??
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const allTodoLists = await getAllTodoLists();

  return {
    paths:
      allTodoLists?.map((todoList) =>
        `todolist/${todoList.id}`
      ) ?? [],
    fallback: 'blocking'
  };
};*/

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const todoListId = context.resolvedUrl.split('/')[context.resolvedUrl.split('/').length - 1];

  const todoList = await getTodoList(+todoListId);
  const tasks = await getTasks(+todoListId);

  return {
    props: {
      todoList: todoList,
      initialTasks: tasks
    }
  }
}
