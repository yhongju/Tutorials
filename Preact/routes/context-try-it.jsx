import { createContext } from "preact";
import { useContext, useMemo, useState } from "preact/hooks";

const CounterContext = createContext(null);

function Counter() {
  // `increment`, not a `setCount`
  // `style` from Provider
  const { count, increment, style } = useContext(CounterContext);

  return (
    <div style={style}>
      <p>Count: {count}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
}

function App() {
  // Init `count`
  const [count, setCount] = useState(0);

  // Shell function(?) for `setCount` function's calling prevention
  const increment = () => {
    setCount(count + 1);
  };

  const countPkg = useMemo(
    () => {
      return { count, increment };
    },
    [count],
  );

  return (
    <CounterContext.Provider
      style={{ display: "flex", gap: "20px" }}
      value={countPkg}
    >
      <Counter />
      <Counter />
      <Counter />
    </CounterContext.Provider>
  );
}

export default App;

// import { render } from "preact";
// render(<App />, document.getElementById("app"));
