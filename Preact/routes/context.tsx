import { createContext } from "preact";

const UserName = createContext("User's name");

const App = () => {
  return (
    // Provide the username value to subtree
    <UserName.Provider value="Bob">
      <div>
        <p>
          <UserName.Consumer>
            {(username) =>
              // Access the current username from context
              <span>{username}</span>}
          </UserName.Consumer>
        </p>
      </div>
    </UserName.Provider>
  );
};

export default App;
