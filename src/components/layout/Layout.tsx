import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300 font-mono">
      <div className="absolute inset-0 bg-black opacity-80 z-0">
        <div className="h-full w-full bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Layout;