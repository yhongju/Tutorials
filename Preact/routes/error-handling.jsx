import { Component } from "preact";

class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return { error: error.message };
  }

  componentDidCatch(error) {
    console.error(error);
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) return <p>Error occured!{this.state.error}</p>;

    return <div>{this.props.children}</div>;
  }
}
