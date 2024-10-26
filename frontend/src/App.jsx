<<<<<<< HEAD
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
=======
import { React, useEffect } from "react";
import Nav from "./component/Nav";
import Body from "./component/Body";
import Whitebody from "./component/Whitebody";
import { useState } from "react";

export default function App() {
  const [mode, setmode] = useState("light");
  const [divyesh, setDivyesh] = useState("Ame Leri Lala");
  const togglemode = () => {
    if (mode == "light") {
      setmode("dark");
      document.body.style.backgroundColor = "dark";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "light";
      document.body.style.color = "black";
    }
  };
  // github ok
  return (
    <div>
      <Nav />
      <Body />
>>>>>>> 9579867c790a1873fe134c7206101af8eef3b907
    </div>
  );
}
