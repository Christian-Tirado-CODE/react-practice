import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  /*
   1. USER INPUT SHOULD BE VALIDATED ON THE SERVER FOR SECURITY REASONS 
   BECAUSE USERS CAN MANIPULATE CODE ON THE BROWSER.
  
  */
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name input is valid');
    }

  }, [enteredNameIsValid]);

  const nameInputChangedHandler = (event) => {
    setEnteredName(event.target.value);
    
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

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

  
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} value={enteredName} onChange={nameInputChangedHandler}/>
        { nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
