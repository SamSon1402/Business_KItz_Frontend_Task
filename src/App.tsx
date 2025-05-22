import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import EditPage from './components/pages/EditPage';
import ViewPage from './components/pages/ViewPage';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header />
          <main className="flex-1 container mx-auto p-4">
            <Routes>
              <Route 
                path="/" 
                element={<EditPage />} 
              />
              <Route 
                path="/view" 
                element={<ViewPage />} 
              />
              <Route 
                path="*" 
                element={<Navigate to="/" />} 
              />
            </Routes>
          </main>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;