// src/components/Desktop.tsx
import React, { useState, useEffect } from 'react';
import { useSystem } from '../context/SystemContext';
import { Window } from './Window';
import { StartMenu } from './StartMenu';
import { ASSETS } from '../config/assets';

export const Desktop: React.FC = () => {
  const { windows, openWindow, toggleStart, closeStart } = useSystem();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const playStartupSound = async () => {
      try {
        const audio = new Audio(ASSETS.SOUNDS.STARTUP);
        audio.volume = 0.5;
        await audio.play();
      } catch (error) {
        console.warn("The browser has blocked automatic sound. The user needs to interact with the page first.");
      }
    };

    playStartupSound();
  }, []); // The empty array [] ensures that the sound only plays once when opening the Desktop

  return (
    <div 
      className="h-screen w-full bg-cover bg-center overflow-hidden relative font-tahoma flex flex-col"
      style={{ backgroundImage: `url(${ASSETS.WALLPAPER})` }}
      onClick={closeStart}
    >
      {/* Desktop */}
      <div className="flex-1 p-4 flex flex-col flex-wrap gap-4 items-start">
        
        {/* Icon: My Computer */}
        <div 
          className="w-20 flex flex-col items-center group cursor-pointer"
          onDoubleClick={() => openWindow('my_computer', 'My Computer')}
        >
          <img src={ASSETS.ICONS.MY_COMPUTER} alt="My Computer" className="w-10 h-10 mb-1 opacity-90 group-hover:opacity-100" />
          <span className="text-white text-xs text-center drop-shadow-md group-hover:bg-[#316ac5] group-hover:bg-opacity-50 px-1 rounded">My Computer</span>
        </div>

        {/* Icon: My Documents */}
        <div 
          className="w-20 flex flex-col items-center group cursor-pointer"
          onDoubleClick={() => openWindow('docs', 'My Documents')}
        >
          <img src={ASSETS.ICONS.DOCUMENTS} alt="My Documents" className="w-10 h-10 mb-1 opacity-90 group-hover:opacity-100" />
          <span className="text-white text-xs text-center drop-shadow-md group-hover:bg-[#316ac5] group-hover:bg-opacity-50 px-1 rounded">My Documents</span>
        </div>

        {/* Icon: Recycle Bin */}
        <div 
          className="absolute bottom-12 right-4 w-20 flex flex-col items-center group cursor-pointer"
          onDoubleClick={() => openWindow('recycle_bin', 'Lixeira')}
        >
          <img src={ASSETS.ICONS.RECYCLE_BIN} alt="Recycle Bin" className="w-10 h-10 mb-1 opacity-90 group-hover:opacity-100" />
          <span className="text-white text-xs text-center drop-shadow-md group-hover:bg-[#316ac5] group-hover:bg-opacity-50 px-1 rounded">Recycle Bin</span>
        </div>

      </div>

      {/* Render Open Windows */}
      {windows.map(app => (
        <Window key={app.id} app={app}>
          <div className="p-4">Conteúdo do app: {app.title}</div>
        </Window>
      ))}

      {/* + START MENU COMPONENT BEING RENDERED HERE */}
      <StartMenu />

      {/* Taskbar */}
      <div 
        className="h-8 bg-gradient-to-b from-[#245edb] via-[#3f8cf3] to-[#245edb] w-full flex items-center justify-between border-t border-[#1240AB] z-[10000]"
        onClick={(e) => e.stopPropagation()} // Prevents clicks on the taskbar from closing the menu
      >
        <button 
          onClick={toggleStart} // + OPEN/CLOSE ACTION
          className="h-full bg-gradient-to-b from-[#489437] to-[#28631b] w-28 rounded-r-xl flex items-center justify-center font-bold text-white italic shadow-[inset_-1px_1px_1px_rgba(255,255,255,0.4)] hover:brightness-110 active:brightness-90"
        >
          <img src={ASSETS.START_BUTTON} alt="Start" className="w-5 mr-1" />
          start
        </button>
        
        <div className="flex-1 flex px-2 gap-1">
            {windows.map(app => (
                <div key={`task-${app.id}`} className="bg-[#3a7af6] border border-[#1643a6] rounded-sm px-3 py-1 text-white text-xs cursor-pointer hover:bg-[#4a8cf6]">
                    {app.title}
                </div>
            ))}
        </div>

        <div className="h-full bg-[#0f8de9] border-l border-[#0e489c] px-3 flex items-center text-white text-xs shadow-[inset_1px_0_1px_rgba(255,255,255,0.4)]">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};