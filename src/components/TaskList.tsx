import React, { FC } from 'react';
import { Task } from '@/pages/App';
import TaskItem from '@/components/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: () => {};
  onRemove: () => {}
}
export const TaskList: FC<TaskListProps> = ({
    tasks,
    onToggle,
    onRemove
}) => {
  return (
    <ul className="todo-list">
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove}/>
      ))}
    </ul>
  );
}
