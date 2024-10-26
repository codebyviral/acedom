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
    </div>
  );
}
