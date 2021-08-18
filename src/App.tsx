import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/models";
import {useState} from "react";
function App() {
  
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos}  onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
