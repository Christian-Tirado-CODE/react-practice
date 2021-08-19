import logo from './logo.svg';
import './App.css';

function App() {
  /*
    What is a side effect?
    Everything else outside of React's main job which is to render UI and React to User Input.
    Examples: sending http requests to backend servers, timers, storing data in browser storage.

    Side effects are managed with the useEffect hook.
    Has two parameters: 1. A function that runs AFTER every component evaluation IF the dependencies changed.
                        2. Dependencies of this effect. The function only runs if the dependencies changed.
  */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
