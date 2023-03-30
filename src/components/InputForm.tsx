import React, { FC, useState } from 'react';

const PLACEHOLDER_TEXT = "Enter new todo here";

interface InputFormProps {
  onAdd: (id: string) => void
}
export const InputForm: FC<InputFormProps> = ({ onAdd }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(inputValue);
    setInputValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input id="todoInput"
             type="text"
             placeholder={PLACEHOLDER_TEXT}
             value={inputValue}
             onChange={handleInputChange}/>
      <button className="add-button button" type="submit">Add Todo</button>
    </form>
  );
}
