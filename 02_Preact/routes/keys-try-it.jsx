import { useEffect, useState } from "preact/hooks";

const wait = (ms) =>
  new Promise(
    (r) => {
      setTimeout(r, ms);
    },
  );

const getTodos = async () => {
  await wait(500);

  return [
    { id: 0, text: "learn preact", done: false },
    { id: 1, text: "make an awesome app", done: false },
  ];
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => {
      getTodos()
        .then((givenTodos) => {
          setTodos(givenTodos);

          // return (
          //   <ul>
          //     {retVals.map((todo) => <li key={todo.id}>{todo.text}</li>)}
          //   </ul>
          // );
        });
    },
  );

  return (
    <ul>
      {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
};
