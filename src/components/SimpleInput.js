import { useRef, useState } from "react";

const SimpleInput = (props) => {
  /*
   1. USER INPUT SHOULD BE VALIDATED ON THE SERVER FOR SECURITY REASONS 
   BECAUSE USERS CAN MANIPULATE CODE ON THE BROWSER.
  
  */
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const nameInputRef = useRef();
  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName('');
   // enteredValue.current.value = ''; NOT IDEAL, DO NOT MANIPULATE THE DOM.
  
  };

  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} value={enteredName} onChange={nameInputChangedHandler}/>
        { !enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
