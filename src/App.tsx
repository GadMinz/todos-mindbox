import React from "react";
import "./scss/App.scss";
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

export type Todo = {
  id: number;
  name: string;
  checked: boolean;
};

const DEFAULT_TODO_LIST = [
  { id: 1, name: "Тестовое задание", checked: false },
  { id: 2, name: "Прекрасный код", checked: true },
  { id: 3, name: "Покрытие тестами", checked: false },
];

const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const addTodo = (name: string) => {
    const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    setTodos([...todos, { id, name, checked: false }]);
  };

  const checkTodo = (id: number) => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>
      <div className="content">
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
