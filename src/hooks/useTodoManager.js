import { useState } from 'react';

const useTodoManager = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hack into the mainframe', completed: false },
    { id: 2, text: 'Upgrade neural implants', completed: false },
  ]);

  const addTodo = (text) => {
    if (text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodoManager;