import React, {useContext} from 'react';
import { useRef } from 'react';
import classes from "./NewTodo.module.css";
import { TodosContext } from '../store/todo-context';
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value; // Exclamation point indicates that the variable will not received null value. Use it when you are sure of that.
        if(enteredText.trim().length === 0){
            return;
        }

        todosCtx.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">New Task:</label>
            <input type="" id="text" ref={todoTextInputRef}/>
            <button>Add</button>
        </form>
    );
};

export default NewTodo;