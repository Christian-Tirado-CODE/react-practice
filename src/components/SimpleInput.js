import { useEffect } from "react";

import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  /*
   1. USER INPUT SHOULD BE VALIDATED ON THE SERVER FOR SECURITY REASONS 
   BECAUSE USERS CAN MANIPULATE CODE ON THE BROWSER.

   2. When to validate:
       a. when form is submitted
       b. When an input is losing focus
       c. On every keystroke
  
  */

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameInputIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => /(.+)@(.+){2,}\.(.+){2,}/.test(value));

  
  
  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    if (nameInputIsValid && emailInputIsValid) {
      console.log("Name and e-mail input are valid");
    }
  }, [nameInputIsValid, emailInputIsValid]);

  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
        </div>
        <div className={emailInputClasses}>
        <label htmlFor="email">Your e-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">E-mail must not be empty</p>
        )}
        </div>
        
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
