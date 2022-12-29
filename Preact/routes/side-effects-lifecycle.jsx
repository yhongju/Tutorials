import { Component } from "preact";

class App extends Component {
  // Class component's lifecycle method
  // This is for side-effects
  componentDidMount() {
    fetch("/dummy/api/user")
      .then((resp) => resp.json())
      .then((user) => {
        this.setState({ user });
      });
  }

  render() {
    const { user } = state;

    // If component hasn't recieved data yet
    if (!user) return <div>Loading...</div>;

    return (
      <div>
        {/* Dummy key */}
        <h2>Hello, {user.username}!</h2>
      </div>
    );
  }
}

export default App;
