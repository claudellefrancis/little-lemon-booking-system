import './App.css';

function App() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <img src={logo} className="Homepage-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Homepage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
