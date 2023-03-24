import React from 'react';

export default function TaskItem(
  {
    task,
    onToggle,
    onRemove
  }) {
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
