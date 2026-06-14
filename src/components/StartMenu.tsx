// src/components/StartMenu.tsx
import React from 'react';
import { useSystem } from '../context/SystemContext';
import { ASSETS } from '../config/assets';

export const StartMenu: React.FC = () => {
  const { isStartOpen, openWindow, closeStart } = useSystem();

  if (!isStartOpen) return null;

  // Function to open an app and close the start menu automatically
  const handleAppClick = (id: string, title: string) => {
    openWindow(id, title);
    closeStart();
  };

  return (
    <div 
      className="absolute bottom-8 left-0 w-[380px] bg-white border border-[#0831d9] rounded-t-lg shadow-2xl flex flex-col z-[9999] font-tahoma overflow-hidden"
      onClick={(e) => e.stopPropagation()} // Prevents clicking inside the menu from closing itself
    >
      {/*  Menu`s Header (User) */}
      <div className="h-14 bg-gradient-to-r from-[#0f34ac] via-[#1656e1] to-[#0f34ac] flex items-center px-2 shadow-sm">
        <div className="w-10 h-10 bg-orange-400 border-2 border-white rounded-md mr-2 overflow-hidden flex items-center justify-center">
          <img src={ASSETS.AVATAR} alt="Avatar"/>
        </div>
        <span className="text-white font-bold text-base drop-shadow-md">Admin</span>
      </div>

      {/* Menu`s Body (Two Columns) */}
      <div className="flex h-[320px] bg-white">
        
        {/* Left Column (Apps) */}
        <div className="w-1/2 bg-white flex flex-col py-2 px-1">
          <div className="font-bold text-xs text-gray-500 pb-2 mb-2 border-b border-gray-200 px-2">Internet</div>
          
          <button 
            onClick={() => handleAppClick('ie', 'Internet Explorer')}
            className="flex items-center px-2 py-2 hover:bg-[#2f71cd] hover:text-white group rounded transition-colors text-sm text-left"
          >
            <img src={ASSETS.ICONS.IEXPLORER} className="w-5 h-5 mr-2" alt="Internet"/> Internet Explorer
          </button>
          
          <button 
            onClick={() => handleAppClick('msn', 'MSN Messenger')}
            className="flex items-center px-2 py-2 hover:bg-[#2f71cd] hover:text-white group rounded transition-colors text-sm text-left"
          >
            <img src={ASSETS.ICONS.MSNMESSENGER} className="w-5 h-5 mr-2" alt="MSN"/> MSN Messenger
          </button>
        </div>

        {/* Right Column (Folders) */}
        <div className="w-1/2 bg-[#d3e5fa] border-l border-[#8ebdf6] flex flex-col py-2 px-1">
          <button 
            onClick={() => handleAppClick('docs', 'My Documents')}
            className="flex items-center px-2 py-1.5 hover:bg-[#2f71cd] hover:text-white group rounded transition-colors text-sm font-bold text-[#00146e] text-left"
          >
            <img src={ASSETS.ICONS.DOCUMENTS} className="w-5 h-5 mr-2" alt="Documents" />
             My Documents
          </button>

          <button 
            onClick={() => handleAppClick('my_computer', 'My Computer')}
            className="flex items-center px-2 py-1.5 hover:bg-[#2f71cd] hover:text-white group rounded transition-colors text-sm font-bold text-[#00146e] text-left"
          >
            <img src={ASSETS.ICONS.MY_COMPUTER} className="w-5 h-5 mr-2" alt="PC" />
            My Computer
          </button>

          <div className="my-2 border-b border-[#a9cbf4] mx-2"></div>

          <button 
            onClick={() => handleAppClick('control_panel', 'Control Panel')}
            className="flex items-center px-2 py-1.5 hover:bg-[#2f71cd] hover:text-white group rounded transition-colors text-sm text-[#00146e] text-left"
          >
            <img src={ASSETS.ICONS.CONTROLPANEL} className="w-5 h-5 mr-2" alt="Control Panel"/> Control Panel
          </button>
        </div>
      </div>

      {/* Footer (Log Off and Shutdown) */}
      <div className="h-10 bg-gradient-to-r from-[#3164cc] to-[#3f76d9] flex items-center justify-end px-2 space-x-4">
        <button className="flex items-center text-white text-xs hover:opacity-80">
          <span className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center mr-1 shadow">🔑</span>
          Log Off
        </button>
        <button className="flex items-center text-white text-xs hover:opacity-80">
          <span className="w-6 h-6 bg-red-500 rounded flex items-center justify-center mr-1 shadow">⏻</span>
          Turn Off Computer
        </button>
      </div>
    </div>
  );
};