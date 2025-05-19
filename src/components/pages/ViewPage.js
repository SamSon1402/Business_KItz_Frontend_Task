import React from 'react';
import TodoList from '../todo/TodoList';

const ViewPage = ({ todos }) => {
  return (
    <div className="bg-gray-900 border border-pink-500/50 rounded shadow-lg shadow-pink-500/10 p-6 mt-8">
      <h2 className="text-lg font-semibold mb-4 text-pink-400 flex items-center">
        <span className="mr-2">⟩</span> ARCHIVE MODE [READ-ONLY]
      </h2>
      <TodoList todos={todos} readonly={true} />
    </div>
  );
};

export default ViewPage;