/**
 * `key` prop is an identifier for a given element
 *
 * In this removing example, "untouch" other elements
 */

import { useState } from "preact/hooks";

const TodoList = () => {
  const [todos, setTodos] = useState(["Wake up", "Make bed"]);

  const switchTodo = () => {
    // Same type with `initialState`
    setTodos(["Make bed"]);
  };

  return (
    <div>
      <ul>
        {/* Without `key` */}
        {/* {todos.map((todo) => <li>{todo}</li>)} */}

        {/* With `key` */}
        {todos.map((todo) => <li key={todo}>{todo}</li>)}
      </ul>
      <button onClick={switchTodo}>I'm awake!</button>
    </div>
  );
};

export default TodoList;
