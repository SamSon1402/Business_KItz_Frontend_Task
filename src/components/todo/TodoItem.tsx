import React from 'react';
import { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
  onDelete?: (id: number) => void;
  readonly: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, readonly }) => {
  const handleDelete = (): void => {
    onDelete && onDelete(todo.id);
  };

  return (
    <li className={`flex items-center justify-between p-3 border ${readonly ? 'border-pink-500/30 bg-gray-800/30' : 'border-cyan-500/30 bg-gray-800/50'} rounded group hover:shadow-md ${readonly ? 'hover:shadow-pink-500/10' : 'hover:shadow-cyan-500/10'} transition-all duration-300`}>
      <span className={readonly ? 'text-pink-100' : 'text-cyan-100'}>{todo.text}</span>
      {!readonly && (
        <button 
          onClick={handleDelete}
          className="text-red-400 opacity-70 group-hover:opacity-100 hover:text-red-300 focus:outline-none transition-all duration-200"
        >
          DELETE
        </button>
      )}
    </li>
  );
};

export default TodoItem;