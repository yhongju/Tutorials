/* Define type of user */
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: "Justine",
  age: 23,
};

/* Get boolean value */
const isJustineAnAdult: boolean = isAdult(justine);
