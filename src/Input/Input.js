import React, { useState, useContext } from "react";

import InputContext from "../inputContext";

const Input = () => {
  const { value, changeValue } = useContext(InputContext);
  return (
    <input
      onChange={changeValue}
      type="text"
      id="input1"
      className="input"
      placeholder="Write something"
      value={value}
    ></input>
  );
};

export default Input;
