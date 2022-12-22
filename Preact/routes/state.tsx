import { Component } from "preact";

class App extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    console.log("On click...");
    this.setState({ clicked: true });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.clicked ? "Clicked!" : "Not clicked"}
      </button>
    );
  }
}
