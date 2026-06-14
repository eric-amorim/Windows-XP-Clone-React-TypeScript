import React from 'react';
import { SystemProvider, useSystem } from './context/SystemContext';
import { BootScreen } from './components/BootScreen';
import { LoginScreen } from './components/LoginScreen';
import { Desktop } from './components/Desktop';

const SystemOrchestrator: React.FC = () => {
  const { phase } = useSystem();

  if (phase === 'boot') return <BootScreen />;
  if (phase === 'login') return <LoginScreen />;
  if (phase === 'desktop') return <Desktop />;
  
  return null;
};

function App() {
  return (
    <SystemProvider>
      <SystemOrchestrator />
    </SystemProvider>
  );
}

export default App;