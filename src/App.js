import logo from './logo.svg';
import './App.css';

function App() {
  {/* 
    
    Browser-side apps don't talk directly to a database because it exposes DB credentials and causes performance issues.
    Instead you connect to a backend app located in a different server(or in the same) than the DB where the code and credentials are not seen by the users.
    https://academind.com/tutorials/hide-javascript-code/
  */}
  
  
  */}
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
