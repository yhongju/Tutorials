import { ComponentChildren } from "preact";

interface InnerButtonProps {
  children: ComponentChildren;
}

const InnerButton = (props: InnerButtonProps) => {
  //   console.log(props);
  return (
    <div
      class="inner-btn" // Tailwind CSS utility error
      // Not working(diff with tutorial), and property error
      style={props.style}
      onClick={props.clicked}
    >
      {props.children}
    </div>
  );
};

const App = () => {
  const clicked = () => {
    console.log("Clicked!");
  };

  return (
    <InnerButton>
      <p class="count">Count:</p>
      <button style={{ color: "purple" }} onClick={clicked}>Click me!</button>
    </InnerButton>
  );
};

export default App;
