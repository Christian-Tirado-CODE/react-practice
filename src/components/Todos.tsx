import React from "react";
import Todo from "../models/models"; // Classes are not only used as a constructor to create objects but as a Type in TS.
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (
  props
) => {
  // We use typescript with functional
  //components by assinging React.FC type to our func.component. This way we can set merge built in props(children) with custom props.
  // We set our custom props inside <{}> brackets.
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          onRemoveTodo={props.onRemoveTodo}
          text={item.name}
        />
      ))}
    </ul>
  );
};

export default Todos;
