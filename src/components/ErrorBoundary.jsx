import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Something went wrong</h2>
          <p className="text-neutral-400 mb-8 max-w-md">
            Our system encountered an unexpected transmission error. Please refresh the page to restart the session.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-200 transition-colors"
          >
            Refresh Session
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
