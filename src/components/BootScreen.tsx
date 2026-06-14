// src/components/BootScreen.tsx
import React, { useEffect } from 'react';
import { useSystem } from '../context/SystemContext';
import { ASSETS } from '../config/assets';

export const BootScreen: React.FC = () => {
  const { setPhase } = useSystem();

  useEffect(() => {
    const timer = setTimeout(() => setPhase('login'), 4000);
    return () => clearTimeout(timer);
  }, [setPhase]);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center cursor-none transition-opacity duration-1000">
      <img src={ASSETS.XPBOOT_LOGO} alt="Windows XP" className="w-64 mb-16" />
      <div className="w-48 h-4 border border-gray-600 rounded-sm relative overflow-hidden bg-black p-[1px]">
        <div className="w-8 h-full bg-blue-500 animate-slide"></div>
      </div>
    </div>
  );
};