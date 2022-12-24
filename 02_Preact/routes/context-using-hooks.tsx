import { createContext } from "preact";
import { useContext } from "preact/hooks";

// Needs input
const UserName = createContext("Dummy user name");

const User = () => {
  // Access the current username from context
  const givenUserName = useContext(UserName); // "Elice"

  return <span>{givenUserName}</span>;
};

const App = () => {
  return (
    <UserName.Provider value="Elice">
      <div>
        <p>
          <User />
        </p>
      </div>
    </UserName.Provider>
  );
};

export default App;
