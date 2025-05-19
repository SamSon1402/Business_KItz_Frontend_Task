import React from 'react';

const Header = ({ page, onNavigate }) => {
  return (
    <header className="bg-gray-900 border-b border-cyan-500 shadow-lg shadow-cyan-500/20">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-cyan-400 tracking-wider">BusinessKitz<span className="text-pink-500 animate-pulse">_</span></h1>
          <nav className="flex space-x-4">
            <button 
              onClick={() => onNavigate('edit')}
              className={`px-3 py-1 border border-cyan-500 ${page === 'edit' 
                ? 'bg-cyan-500/20 text-cyan-300 shadow-md shadow-cyan-500/20' 
                : 'hover:bg-gray-800 text-gray-400'} transition-all duration-300`}
            >
              EDIT.SYS
            </button>
            <button 
              onClick={() => onNavigate('view')}
              className={`px-3 py-1 border border-pink-500 ${page === 'view' 
                ? 'bg-pink-500/20 text-pink-300 shadow-md shadow-pink-500/20' 
                : 'hover:bg-gray-800 text-gray-400'} transition-all duration-300`}
            >
              VIEW.SYS
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;