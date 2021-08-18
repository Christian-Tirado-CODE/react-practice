import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = (
  props
) => {
  // We use typescript with functional
  //components by assinging React.FC type to our func.component. This way we can set merge built in props(children) with custom props.
  // We set our custom props inside <{}> brackets.

  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          text={item.name}
        />
      ))}
    </ul>
  );
};

export default Todos;
