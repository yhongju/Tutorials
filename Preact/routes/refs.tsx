import { createRef } from "preact";

const ref = createRef();

// console.log("Init ref:", ref);

ref.current = "I'm not null!";

// console.log("Second ref:", ref);
