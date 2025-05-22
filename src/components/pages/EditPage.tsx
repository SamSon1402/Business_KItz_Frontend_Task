import React, { KeyboardEvent } from 'react';
import TodoList from '../todo/TodoList';
import useInputField from '../../hooks/useInputField';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addTodo, deleteTodo } from '../../store/slices/todoSlice';

const EditPage: React.FC = () => {
  const { input, handleInputChange, clearInput } = useInputField();
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);

  const handleSubmit = (): void => {
    dispatch(addTodo(input));
    clearInput();
  };

  const handleDeleteTodo = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-gray-900 border border-cyan-500/50 rounded shadow-lg shadow-cyan-500/10 p-6 mt-8">
      <h2 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
        <span className="mr-2">⟩</span> TASK TERMINAL
      </h2>
      
      <div className="mb-6 flex">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter new objective..."
          className="flex-1 px-4 py-2 bg-gray-800 border-t border-b border-l border-cyan-500/50 rounded-l focus:outline-none focus:border-cyan-400 text-cyan-100 placeholder-gray-500"
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={handleSubmit} 
          className="bg-cyan-900 hover:bg-cyan-800 text-cyan-100 px-4 py-2 border-t border-r border-b border-cyan-500/50 rounded-r focus:outline-none transition-colors duration-300"
        >
          UPLOAD
        </button>
      </div>
      
      <TodoList todos={todos} onDelete={handleDeleteTodo} readonly={false} />
    </div>
  );
};

export default EditPage;