import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos = [], onDelete, readonly }) => {
  // Add a safety check to handle if todos is undefined
  const todoArray = Array.isArray(todos) ? todos : [];
  
  const renderEmptyState = () => (
    <p className="text-gray-500 italic border border-dashed border-gray-700 p-4 text-center">NO TASKS DETECTED IN SYSTEM</p>
  );
  
  const renderTodoItems = () => (
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