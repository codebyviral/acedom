import { React, useEffect } from "react";
import Nav from "./component/Nav";
import Body from "./component/Body";
import { useState } from "react";

export default function App() {
  const [mode, setmode] = useState("light");
  const [divyesh, setDivyesh] = useState("Ame Leri Lala");

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };
  // github ok
  return (
    <div>
      <Nav mode={mode} toggleMode={toggleMode} />
      <Body mode={mode}  />
    </div>
  );
}