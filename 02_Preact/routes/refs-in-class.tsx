/**
 * Use `refs` as class' properties
 */

import { Component, createRef } from "preact";

export default class App extends Component {
  input = createRef();

  // TODO: Fix it to working
  componentDidMount(): void {
    console.log("ref:", this.input);
    this.input.current.focus();
  }

  render() {
    return <input placeholder="I'm input..." ref={this.input} />;
  }
}
