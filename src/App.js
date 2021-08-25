import logo from './logo.svg';
import './App.css';

function App() {

  /*
    React - It's a library that only cares and knows about components, state, props, context and finds out what components might need to change based on the differences of the previous and current state of a component.
    It does not know about html elements. It does not know about the browser. It sends the information regarding what changed and what should be visible on the screen to the ReactDOM.
    React uses the Virtual DOM to determine how the component tree currently looks like and what it should look like. That info is handed to ReactDOM
    ReactDOM - Interface to the web. Responsible for managing real html elements and bringing something on to the screen. It receives the differences in the Virtual DOM and updates the real DOM.

    Re-evaluating components !== Re-rendering the DOM
    Components - re-evaluated when the props, state or context changes. React executes component functions.


    Real DOM - Changes to the real DOM are only made for differences in evaluations. Making changes to the real DOM is performance intesive so we want to update only parts of the UI that need to be changed.
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
