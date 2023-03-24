import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const PLACEHOLDER_TEXT = "Enter new todo here";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          else {
            return todo;
          }
        }
      ),
    );
  };

  const removeTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <form className="form" onSubmit={addTodo}>
        {/*<label htmlFor="todoInput">New Todo</label>*/}
        <input id="todoInput"
               type="text"
               placeholder={PLACEHOLDER_TEXT}
               value={inputValue}
               onChange={handleInputChange}/>
        <button className="add-button button" type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
            <button className="remove-button button"
                    onClick={() => removeTodo(todo.id)}>Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

