import { useEffect, useState } from "preact/hooks";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("`count` is now:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
