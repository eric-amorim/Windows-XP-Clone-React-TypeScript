// src/context/SystemContext.tsx
import React, { createContext, useState, useContext } from 'react';

type SystemPhase = 'boot' | 'login' | 'desktop';

export interface WindowApp {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface SystemContextType {
  phase: SystemPhase;
  setPhase: (phase: SystemPhase) => void;
  windows: WindowApp[];
  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  isStartOpen: boolean;
  toggleStart: () => void;
  closeStart: () => void;
}

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export const SystemProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phase, setPhase] = useState<SystemPhase>('boot');
  const [windows, setWindows] = useState<WindowApp[]>([]);
  const [highestZIndex, setHighestZIndex] = useState(10);
  
  const [isStartOpen, setIsStartOpen] = useState(false);

  const openWindow = (id: string, title: string) => {
    if (!windows.find(w => w.id === id)) {
      setWindows([...windows, { id, title, isOpen: true, isMinimized: false, isMaximized: false, zIndex: highestZIndex + 1 }]);
      setHighestZIndex(prev => prev + 1);
    }
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setHighestZIndex(prev => prev + 1);
    setWindows(windows.map(w => w.id === id ? { ...w, zIndex: highestZIndex + 1 } : w));
  };

  const toggleStart = () => setIsStartOpen(!isStartOpen);
  const closeStart = () => setIsStartOpen(false);

  return (
    <SystemContext.Provider value={{ 
      phase, setPhase, windows, openWindow, closeWindow, focusWindow,
      isStartOpen, toggleStart, closeStart
    }}>
      {children}
    </SystemContext.Provider>
  );
};

export const useSystem = () => {
  const context = useContext(SystemContext);
  if (!context) throw new Error("useSystem must be used within SystemProvider");
  return context;
};