/**
 * Preact will set ref's value(it's `current` prop) to the corresponding HTML element
 * Once set, can use the ref's value to access and modify the HTML element
 */

import { createRef } from "preact";

const input = createRef();

const App = () => {
  return <input ref={input} placeholder="I'm input"></input>;
};

export default App;
