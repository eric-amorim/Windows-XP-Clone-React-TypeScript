// src/components/LoginScreen.tsx
import React from 'react';
import { useSystem } from '../context/SystemContext';
import { ASSETS } from '../config/assets';

export const LoginScreen: React.FC = () => {
  const { setPhase } = useSystem();

  return (
    <div className="h-screen w-full bg-[#5a7edc] flex items-center justify-center font-tahoma">
      <div className="w-full max-w-4xl flex items-center justify-between px-16">
        <div className="flex-1 text-right pr-8 border-r-2 border-[#7b9eea]">
          <img src={ASSETS.XP_LOGO} alt="Windows XP" className="w-48 ml-auto" />
        </div>
        <div className="flex-1 pl-8">
          <div 
            className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-white hover:bg-opacity-10 rounded-md transition"
            onClick={() => setPhase('desktop')}
          >
            <div className="w-16 h-16 bg-orange-400 rounded-md border-2 border-white shadow-md"><img src={ASSETS.AVATAR} alt="User"/></div>
            <span className="text-white text-xl font-bold drop-shadow-md">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};