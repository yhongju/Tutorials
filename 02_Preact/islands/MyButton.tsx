export default function MyButton() {
  return (
    <button onClick={() => console.log("Message from `onClick` prop!")}>
      Click me!
    </button>
  );
}
