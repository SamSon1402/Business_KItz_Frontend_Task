import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import EditPage from './components/pages/EditPage';
import ViewPage from './components/pages/ViewPage';
import useTodoManager from './hooks/useTodoManager';
import './styles/index.css';

const App: React.FC = () => {
  const { todos, addTodo, deleteTodo } = useTodoManager();

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <main className="flex-1 container mx-auto p-4">
          <Routes>
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
            <Route 
              path="/view" 
              element={
                <ViewPage 
                  todos={todos} 
                />
              } 
            />
            <Route 
              path="*" 
              element={<Navigate to="/" />} 
            />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default App;