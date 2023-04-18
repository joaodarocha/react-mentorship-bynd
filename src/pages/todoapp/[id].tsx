import { TodoPage, TodoPageProps } from '@/components/pages/TodoPage';
import { getTasks, getTodoList } from '@/utils/api';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default TodoPage;

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
