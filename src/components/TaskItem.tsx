import React, { FC } from 'react';
import { Task } from '@/pages/todoapp/[id]';

interface TaskItemProps {

  task: Task;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}
export const TaskItem: FC<TaskItemProps> = ({
    task,
    onToggle,
    onRemove
  }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className="remove-button button"
              onClick={() => onRemove(task.id)}>Remove
      </button>
    </li>
  );
}
