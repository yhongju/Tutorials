import { createElement, render } from "preact";

// interface {

// }

const MyButton = (props) => <button class="my-button">{props.text}</button>;

const vdom = <MyButton text="Text from `vdom!`" />;
// It compiled like this
const vdom_comp = createElement(MyButton, { text: "Text from `vdom`!" });

/**
 * Nesting components
 */
const MediaPlayer = () => {
  return (
    <div>
      <MyButton text="Play" />
      <MyButton text="Stop" />
    </div>
  );
};

const MediaPlayerCond = (props) => {
  return (
    <div>
      {props.playing ? <MyButton text="Stop" /> : <MyButton text="Play" />}
    </div>
  );
};

// render(vdom, document.body);
// export default MediaPlayer; // To actually run with fresh

// render(<MediaPlayerCond playing={true} />, document.body);
// Renders <button>Stop<button>

/**
 * Component children
 *
 * <Foo>
 *  <a />
 *  <b />
 * </Foo>
 *
 * const Foo = (props) => {
 *  return props.child
 * }
 * // [<a />, <b />]
 */

const MyButtonChild = (props) => {
  // console.log(props.children);
  return <button class="my-button">{props.children}</button>; // children: Nested component
};
const App = () => {
  return (
    <MyButtonChild>
      <img src="icon.png" />
      Click me!
    </MyButtonChild>
  );
};

// render(<App />, document.body);
export default App;
