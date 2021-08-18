import React, {useState, createContext } from "react";
import Todo from "../models/models";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}


export const TodosContext = createContext<TodosContextObj>
  ({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});


 const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler  = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  const contextValue: TodosContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }


  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
}

export default TodosContextProvider;