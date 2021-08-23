import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';

function App() {
 /*
    Types of Tests: Unit tests, integration tests and End-to-End tests
    Unit tests= testing all the individual building blocks(functions, components) in isolation.
    Integration tests= Test the combination of building blocks. A project typically contains a couple of integration tests.
    End-to-end tests= Test complete scenarios in your app just as the user would experience them. A project contains only a few e-to-e tests.
 

    What to test & How to test:
    What:
    Test the different building blocks
    Unit tests: The smallest building blocks that make up your app.
 
    How:
    Test success and error messages, also test rare cases(but possible) results.

    Required Tools & Setup:
    Jest - We need a tool for running our tests & asserting the results.
    React testing Library - Also, we need a tool for "simulating" (rendering) our React app/components.
    Both tools are already set up for you when using create-react-app.
    */


  return (
     <Greeting />
  );
}

export default App;
