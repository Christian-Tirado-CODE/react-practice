import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  /*
   1. USER INPUT SHOULD BE VALIDATED ON THE SERVER FOR SECURITY REASONS 
   BECAUSE USERS CAN MANIPULATE CODE ON THE BROWSER.

   2. When to validate:
       a. when form is submitted
       b. When an input is losing focus
       c. On every keystroke
  
  */
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameTouched && !enteredNameIsValid;


  let formIsValid = false;
  if(enteredNameIsValid){
    formIsValid = true;
  }

  useEffect(() => {
    if(enteredNameIsValid){
      console.log('Name input is valid');
    }

  }, [enteredNameIsValid]);

  const nameInputChangedHandler = (event) => {

    setEnteredName(event.target.value);
    if(!enteredNameIsValid){
        return;
    }

  };


  const nameInputBlurHandler = () => {

    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      
      return;
    }

  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangedHandler} onBlur={nameInputBlurHandler}/>
        { nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
