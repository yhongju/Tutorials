import { useEffect, useState } from "preact/hooks";

interface TodoType {
  id: number;
  text: string;
  done: boolean;
}

const getTodos = (): Promise<TodoType[]> => {
  try {
    return JSON.parse(localStorage.todos);
  } catch (e) {
    return new Promise((res, rej) => {
      [
        { id: 1, text: "Learn Preact", done: true },
        { id: 2, text: "Make an awesome app", done: false },
      ];
    });
  }
};

const ToDos = () => {
  const [todos, setTodos] = useState(Array<TodoType>);

  // Fetching `todos` data when first-rendering
  useEffect(() => {
    alert("1");
    getTodos().then((retTodos) => {
      setTodos(retTodos);
    });
  }, []);

  // Every time `todos` changing
  useEffect(() => {
    // Save the list to `localStorage`
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  const toggle = (id: number) => {
    setTodos((todos: Array<TodoType>) => {
      return todos.map((todo) => {
        // Replace the matching `todo` item with a version where done is toggled
        if (todo.id === id) {
          todo = { ...todo, done: !todo.done };
        }

        return todo;
      });
    });
  };

  const addTodo = (e) => {
    e.preventDefalut();

    const form = e.target;
    const text = form.todo.value;

    // Pass a callback to the `todos` state setter to update its value in-place
    setTodos((todos) => {
      const id = todos.length + 1;
      const newTodo = { id, text, done: false };

      return todos.concat(newTodo);
    });

    form.reset();
  };

  return (
    <div>
      {
        /* <ul style={{ listStyle: "none", padding: 0 }}>
        {todos && todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done} // TODO: Fix und.done
                onClick={() => toggle(todo.id)}
              />
              {" " + todo.text}
            </label>
          </li>
        ))}
      </ul>
      <form onSubmit={addTodo}>
        <input name="todo" placeholder="Add ToDo [enter]" />
      </form> */
      }
    </div>
  );
};

export default ToDos;
