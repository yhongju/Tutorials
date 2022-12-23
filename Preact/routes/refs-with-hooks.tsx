/**
 * `useRef`, `useEffect`
 */

import { useEffect, useRef } from "preact/hooks";

const App = () => {
  const input = useRef(null);

  useEffect(() => {
    console.log(`ref:`, input);
    input.current.focus();
  }, []);

  return <input placeholder="I'm input!" ref={input} />;
};

export default App;
