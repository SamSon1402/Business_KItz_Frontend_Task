import { useState } from 'react';
import { Todo } from '../types';

interface TodoManagerReturn {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
}

const useTodoManager = (): TodoManagerReturn => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Hack into the mainframe', completed: false },
    { id: 2, text: 'Upgrade neural implants', completed: false },
  ]);

  const addTodo = (text: string): void => {
    if (text.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, deleteTodo };
};

export default useTodoManager;