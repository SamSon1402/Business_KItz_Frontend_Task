import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../../types';

interface TodoListProps {
  todos: Todo[];
  onDelete?: (id: number) => void;
  readonly: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ todos = [], onDelete, readonly }) => {
  const todoArray = Array.isArray(todos) ? todos : [];
  
  // Change JSX.Element to React.ReactElement
  const renderEmptyState = (): React.ReactElement => (
    <p className="text-gray-500 italic border border-dashed border-gray-700 p-4 text-center">NO TASKS DETECTED IN SYSTEM</p>
  );
  
  // Change JSX.Element to React.ReactElement
  const renderTodoItems = (): React.ReactElement => (
    <ul className="space-y-2">
      {todoArray.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          readonly={readonly} 
        />
      ))}
    </ul>
  );

  return todoArray.length === 0 ? renderEmptyState() : renderTodoItems();
};

export default TodoList;