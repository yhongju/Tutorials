import { ComponentChildren, render } from "preact";
import { useState } from "preact/hooks";

// interface MyButtonProps {
//   children: ComponentChildren;
//   // ...
// }

function MyButton(props: MyButtonProps) {
  console.log(props);
  return (
    <button style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  const clicked = () => {
    setCounter(counter + 1);
  };

  return (
    <MyButton>
      <p class="count">Count:{counter}</p>
      <MyButton style={{ color: "purple" }} onClick={clicked}>
        Click me
      </MyButton>
    </MyButton>
  );
}

// render(<App />, document.getElementById("app"));
