const App = () => {
  const todos = [
    { id: 0, text: "Wake up" },
    { id: 1, text: "Make bed" },
  ];

  return (
    <ul>
      {todos.map(
        (todo) => <li key={todo.id}>{todo.text}</li>,
      )}
    </ul>
  );
};
