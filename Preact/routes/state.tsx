import { Component } from "preact";

class App extends Component {
  state = {
    clicked: false,
  };

  /**
   * Clicking the button calls `setState`
   * `setState` causes Preact to call class' `render` again
   * `render` causes Preact to upatde the button's text in the DOM
   */
  handleClick = () => {
    console.log("Clicked");
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
