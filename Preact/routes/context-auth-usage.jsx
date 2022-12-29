import { createContext } from "preact";
import { useContext, useMemo, useState } from "preact/hooks";

const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  // Memoization: Caching calculation
  const auth = useMemo(
    () => {
      return { user, setUser };
    },
    [user],
  );

  return (
    <AuthContext.Provider value={auth}>
      <div class="app">
        {auth.user && <p>Welcome {auth.user.name}!</p>}
        <Login />
      </div>
    </AuthContext.Provider>
  );
};

const Login = () => {
  const { user, setUser } = useContext(AuthContext);

  if (user) {
    return (
      <div class="logged-in">
        Logged in as {user.name}.
        {/* Click to logout: Set user `null` */}
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    );
  }

  return (
    <div class="logged-out">
      {/* Set user as `bob` */}
      <button onClick={() => setUser({ name: "Bob" })}>Login as `Bob`</button>
    </div>
  );
};

export default App;

// // Working in tutorial page
// import { render } from "preact";
// render(<App />, document.body);
