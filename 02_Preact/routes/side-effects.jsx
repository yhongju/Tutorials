import { useEffect, useRef } from "preact/hooks";

const App = () => {
  const input = useRef();

  // TODO: Fix not triggered issue
  useEffect(
    () => {
      console.log("`useEffect()`");
      input.current.focus();
    },
  );

  return <input ref={input} />;
};

export default App;
