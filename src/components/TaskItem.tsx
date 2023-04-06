import React, { FC } from 'react';
import { Task } from '@/pages/todoapp/[id]';

interface TaskItemProps {

  task: Task;
  onToggle: (task: Task) => void;
  onRemove: (id: number) => void;
}

export const TaskItem: FC<TaskItemProps> = (
  {
    task,
    onToggle,
    onRemove
  }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button className="remove-button button"
              onClick={() => onRemove(task.id)}>❌
      </button>
    </li>
  );
}
