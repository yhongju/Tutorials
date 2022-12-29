import { Component, render } from "preact";
import { useState } from "preact/hooks";

function Clicker() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error("I am erroring");
  }

  return <button onClick={() => setClicked(true)}>Click Me</button>;
}

class App extends Component {
  state = { error: null };

  // Way 1.
  static getDerivedStateFromError(err) {
    return { error: err.message };
  }

  // Way 2.
  componentDidCatch(err) {
    this.setState({ error: err.message });
    console.error(this.state.error);

    // Not sure about this...
    return <p>Error: {this.state.error}</p>;
  }

  render() {
    if (this.state.error) {
      return <p>Error: {this.state.error}</p>;
    }

    return <Clicker />;
  }
}

// render(<App />, document.getElementById("app"));
