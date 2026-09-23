function DebugPanel({ logs, loadTime }) {
  return <aside className="debug-panel"><strong>Live debug</strong><span>Load: {loadTime} ms</span><span>Events: {logs.length}</span>{logs.slice(-3).map((log, index) => <small key={`${log}-${index}`}>{log}</small>)}</aside>;
}

export default DebugPanel;
