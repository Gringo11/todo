import { useState } from "react";
import "../styles/todo.css";
import InputWords from "./InputWords";
import WordsList from "./WordsList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };
  return (
    <div className="wrapper">
      <InputWords todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <WordsList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default TodoApp;
