import React, {useState} from "react";

import InputContext from "./inputContext";
import Input from "./Input/Input";

import "./App.css";

function App() {
  const [value, setValue]=useState("");
  const changeValue=(e)=>setValue(e.target.value);
  return (
    <InputContext.Provider
      value={{
        value,
        changeValue
      }}
    >
      <div>
        <span>{value}</span>
      </div>
      <Input></Input>
    </InputContext.Provider>
  );
}

export default App;
