/**
 * Use state in function component
 *
 * `Hooks` must be called in the same order within a component
 */

import { useState } from "preact/hooks";

const App = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    // console.log(clicked);
    // clicked ? setClicked(false) : setClicked(true);
    console.log(`Clicked~`);
    setClicked(true);
  };

  return (
    // TODO: Fix onClick event. It dosen't working
    <button onClick={handleClick}>
      {clicked ? "Clicked." : "Not clicked!"}
    </button>
  );
};

export default App;
