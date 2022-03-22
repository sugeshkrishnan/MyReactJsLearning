import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
  const value = useRef(0);

  useEffect(() => {
    value.current = value.current + 1;
  });

  const inputElement = useRef();//example 2
  const focusInput = () => {
    inputElement.current.focus();
  };

  const previousInputValue = useRef("");//example3
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

    return (
        <>
         <p>----------------Example 1 ----------------</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {value.current}</h1>
        <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>

        <p>-----------------Example 2---------------</p>
       <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      </>
    );
}

export default UseRefHook;