import React, { useState } from 'react';
import Nav from './component/Nav';
import Body from './component/Body';

export default function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <div>
      <Nav mode={mode} toggleMode={toggleMode} />
      <Body mode={mode} />
    </div>
  );
}
