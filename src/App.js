import React from 'react';
import './styles/cyberpunk.css'; // Import the custom CSS
import useTodoManager from './hooks/useTodoManager';
import useNavigation from './hooks/useNavigation';
import useInputField from './hooks/useInputField';

function App() {
  const { todos, addTodo, deleteTodo } = useTodoManager();
  const { page, navigateTo } = useNavigation();
  const { input, handleInputChange, clearInput } = useInputField();

  const handleSubmit = () => {
    addTodo(input);
    clearInput();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="app-title">BusinessKitz<span className="blink">_</span></h1>
          <nav className="nav-buttons">
            <button 
              onClick={() => navigateTo('edit')}
              className={`btn btn-cyan ${page === 'edit' ? 'btn-active-cyan' : ''}`}
            >
              EDIT.SYS
            </button>
            <button 
              onClick={() => navigateTo('view')}
              className={`btn btn-pink ${page === 'view' ? 'btn-active-pink' : ''}`}
            >
              VIEW.SYS
            </button>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {page === 'edit' ? (
          <div className="panel panel-cyan">
            <h2 className="panel-title panel-title-cyan">⟩ TASK TERMINAL</h2>
            
            <div className="input-group">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter new objective..."
                className="input-field"
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSubmit} className="input-button">
                UPLOAD
              </button>
            </div>
            
            {todos.length === 0 ? (
              <p className="empty-state">NO TASKS DETECTED IN SYSTEM</p>
            ) : (
              <ul className="todo-list">
                {todos.map(todo => (
                  <li key={todo.id} className="todo-item todo-item-edit">
                    <span className="todo-text-edit">{todo.text}</span>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="delete-btn"
                    >
                      DELETE
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="panel panel-pink">
            <h2 className="panel-title panel-title-pink">⟩ ARCHIVE MODE [READ-ONLY]</h2>
            
            {todos.length === 0 ? (
              <p className="empty-state">NO TASKS DETECTED IN SYSTEM</p>
            ) : (
              <ul className="todo-list">
                {todos.map(todo => (
                  <li key={todo.id} className="todo-item todo-item-view">
                    <span className="todo-text-view">{todo.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;