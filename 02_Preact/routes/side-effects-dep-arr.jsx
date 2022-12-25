import { useEffect, useState } from "preact/hooks";

const App = () => {
  const [count, setCount] = useState(0);

  /**
   * All triggers not woring!
   * TODO: Fix this problem!
   */

  // Without a `dependency array`
  useEffect(() => {
    console.log("`<App>` rendered!");
  });

  // With a `dependency array`
  useEffect(() => {
    console.log("`count` value changed!");
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>+</button>;
};

export default App;
