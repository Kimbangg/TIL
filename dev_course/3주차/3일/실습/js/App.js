import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import { setItem } from "./storage.js";

export default function App({ $target, initialState }) {
  new Header({
    $target,
    text: "Simple Todo List",
  });

  new TodoForm({
    $target,
    onSumbit: (text) => {
      const nextState = [...todoList.state, { text }];

      todoList.setState(nextState);
      setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}
