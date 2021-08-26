import React, {useState, useCallback} from 'react';
import './App.css';
import Button from "./UI/Button/Button";
import DemoOutput from './UI/Demo/DemoOutput';
function App() {
  
  /*
    React - It's a library that only cares and knows about components, state, props, context and finds out what components might need to change based on the differences of the previous and current state of a component.
    It does not know about html elements. It does not know about the browser. It sends the information regarding what changed and what should be visible on the screen to the ReactDOM.
    React uses the Virtual DOM to determine how the component tree currently looks like and what it should look like. That info is handed to ReactDOM
    ReactDOM - Interface to the web. Responsible for managing real html elements and bringing something on to the screen. It receives the differences in the Virtual DOM and updates the real DOM.

    Re-evaluating components !== Re-rendering the DOM
    Components - re-evaluated when the props, state or context changes. React executes component functions.


    Real DOM - Changes to the real DOM are only made for differences in evaluations. Making changes to the real DOM is performance intesive so we want to update only parts of the UI that need to be changed.
  
  
    We can avoid unnecessary child component re-evaluations using react.memo(). This will make the component re-render only when its props change.
    This has a cost too. The cost of storing the previous and current props and comparing both to see if the component needs to be re-evaluated. 
    Use it wisely meaning select only a few components on a high level in the component tree to avoid unnecessary rerenders of a branch of the tree.
      It is a trade-off between performance cost of re-evaluating the component with the performance cost of comparing props.

      The <Button> component rerenders even though we use React.memo() because we passed in a function object as prop.
      When a component rerenders it creates new values and that goes for primitives and reference types. When the component compares the previous function object with the current function object they are not the same.
      because  {} === {} is false. On the other hand 1 === 1 and false === false.
    */
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    console.log("APP RUNNING"); // this proves that for every state change the component in which the state was changed re-renders.
    // Only the differences between the virtual snapshots are considered for the updates made to the real DOM. This is evidenced when we saw the paragraph element flash in the developer tools.

    const toggleParagraphHandler = useCallback(() => { // useCallback allows you to save a function object and reuse it across multiple component render cycles.
       if(allowToggle) // Because of closures, react stores the values of every variable inside the function object. When the allowToggle state variable changes it won't update the value inside the closure unless we specify it in the dependencies.
                      //  Make sure you understand closures: 
       setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }, [allowToggle]); 

    const allowToggleHandler = () => {
       setAllowToggle(true);
    };
  return (
    <div className="App">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph} />
        <Button onClick={allowToggleHandler}>Allow toggling</Button>
        <Button onClick={toggleParagraphHandler}>toggle paragraph!</Button> 
        

    </div>
  );
}

export default App;
