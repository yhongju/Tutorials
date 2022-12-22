/**
 * Why use class component?
 * >>> To keep track component's lifecycle
 */

import { Component, ComponentChildren, render } from "preact";

interface MyButtonProps {
  children: ComponentChildren;
}

// Takes props as input
// Returns Virtual DOM tree
class MyButton extends Component {
  render(props: MyButtonProps) {
    // Tailwind CSS utility, theme error
    return <button class="my-button">{props.children}</button>;
  }
}

// render(<MyButton>Click me!</MyButton>, document.body);

/**
 * Lifecycle methods
 */

interface UpdatedButtonProps {
  children: ComponentChildren;
}

class UpdatedButton extends Component {
  componentDidMount(): void {
    console.log(`Mounted!`);
  }

  componentWillUpdate(): void {
    console.log(`Updated!`);
  }

  render(props: UpdatedButtonProps) {
    return <button class="update-btn">{props.children}</button>;
  }
}

// render(<UpdatedButton>Click to update me!</UpdatedButton>, document.body);
