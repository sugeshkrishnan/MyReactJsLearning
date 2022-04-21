import { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Todos from "./Todos";

function UseCallbackHook() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        This is in Parent Count: {count}
        <button onClick={increment}>+</button>
        Everytime parent updates child also rerenders. To prevent use useMemo
        for child ie. Todos
      </div>
    </>
  );
}
export default UseCallbackHook;
