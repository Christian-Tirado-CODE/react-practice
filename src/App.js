import logo from './logo.svg';
import './App.css';

function App() {
 /*
    Types of Tests: Unit tests, integration tests and End-to-End tests
    Unit tests= testing all the individual building blocks(functions, components) in isolation.
    Integration tests= Test the combination of building blocks. A project typically contains a couple of integration tests.
    End-to-end tests= Test complete scenarios in your app just as the user would experience them. A project contains only a few e-to-e tests.
 
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
