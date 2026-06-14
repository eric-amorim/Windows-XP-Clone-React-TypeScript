// src/components/Window.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useSystem, type WindowApp } from '../context/SystemContext';

interface Props {
  app: WindowApp;
  children: React.ReactNode;
}

export const Window: React.FC<Props> = ({ app, children }) => {
  const { closeWindow, focusWindow } = useSystem();

  if (app.isMinimized) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onMouseDown={() => focusWindow(app.id)}
      style={{ zIndex: app.zIndex }}
      className={`absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-[#ece9d8] border border-[#0831d9] rounded-t-lg shadow-xl overflow-hidden flex flex-col`}
    >
      {/* Title Bar */}
      <div className="h-8 bg-gradient-to-r from-[#0058e6] via-[#3a93ff] to-[#0058e6] flex justify-between items-center px-2 cursor-grab active:cursor-grabbing text-white font-tahoma">
        <span className="text-sm font-bold tracking-wide drop-shadow-md">{app.title}</span>
        <div className="flex space-x-1">
          <button className="w-5 h-5 bg-blue-600 border border-white text-white rounded-[2px] shadow-sm text-xs flex items-center justify-center">_</button>
          <button className="w-5 h-5 bg-blue-600 border border-white text-white rounded-[2px] shadow-sm text-xs flex items-center justify-center">□</button>
          <button 
            onClick={() => closeWindow(app.id)}
            className="w-5 h-5 bg-red-500 border border-white text-white rounded-[2px] shadow-sm text-xs flex items-center justify-center hover:bg-red-600"
          >
            ×
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="flex-1 bg-white border-t border-[#0831d9] overflow-auto">
        {children}
      </div>
    </motion.div>
  );
};