import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import EditPage from './components/pages/EditPage';
import ViewPage from './components/pages/ViewPage';
import useTodoManager from './hooks/useTodoManager';
import './styles/index.css';

function App() {
  // Use the todo manager hook to manage todo state across routes
  const { todos, addTodo, deleteTodo } = useTodoManager();

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-black text-gray-300 font-mono">
        <div className="absolute inset-0 bg-black opacity-80 z-0">
          <div className="h-full w-full bg-gradient-to-b from-purple-900/10 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header is outside the Routes so it appears on all pages */}
          <Header />
          
          {/* Main content area with routes */}
          <main className="flex-1 container mx-auto p-4">
            <Routes>
              {/* Edit mode on the root path */}
              <Route 
                path="/" 
                element={
                  <EditPage 
                    todos={todos} 
                    onAddTodo={addTodo} 
                    onDeleteTodo={deleteTodo} 
                  />
                } 
              />
              
              {/* View mode on /view path */}
              <Route 
                path="/view" 
                element={
                  <ViewPage 
                    todos={todos} 
                  />
                } 
              />
              
              {/* Redirect any unknown paths to the home page */}
              <Route 
                path="*" 
                element={<Navigate to="/" />} 
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;