/**
 * Case for DO NOT USE
 *
 * Never use an `array` or `loop` index as a `key`
 */

import { useState } from "preact/hooks";

const App = () => {
  const [todos, setTodos] = useState(["Wake up", "Make bed"]);

  const switchTodo = () => {
    setTodos(["Make bed"]);
  };

  return (
    <ul>
      {todos.map(
        // Index order will be changed
        (todo, idx) => <li key={idx}>{todo}</li>,
      )}
      <button onClick={switchTodo}>I'm awake!</button>
    </ul>
  );
};
