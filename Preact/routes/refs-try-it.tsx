import { render } from "preact";
import { useRef } from "preact/hooks";

function App() {
  const input = useRef(null);

  function onClick() {
    input.current.focus();
  }

  return (
    <div>
      {/* <input initialValue="Hello World!" ref={input} /> */}
      <input placeholder="Input" ref={input} />
      <button onClick={onClick}>Focus input</button>
    </div>
  );
}

// render(<App />, document.getElementById("app"));
