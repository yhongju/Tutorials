import { createContext } from "preact";
import { useContext, useMemo, useState } from "preact/hooks";

const AuthContext = createContext(null);

const Login = () => {
  const { user, setUser } = useContext(AuthContext);

  if (user) {
    return (
      <div class="logged-in">
        Logged in as {user.name}.
        <button onClick={() => setUser(null)}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div class="logged-out">
      <button onClick={() => setUser({ name: "Bob" })}>
        Login as `bob`
      </button>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  const auth = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return (
    <AuthContext.Provider value={auth}>
      <div class="app">
        {auth.user && <p>Welcome {auth.user.name}!</p>}
        <Login />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
