import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <div className="error-box"><h2>Something went wrong.</h2><button onClick={() => window.location.reload()}>Reload app</button></div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
