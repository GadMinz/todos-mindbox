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

export type Filter = "All" | "Active" | "Completed";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "Тестовое задание", checked: false },
  { id: 2, name: "Прекрасный код", checked: true },
  { id: 3, name: "Покрытие тестами", checked: false },
];

const App = () => {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);
  const [filter, setFilter] = React.useState<Filter>("All");
  const [filteredTodo, setFilteredTodos] = React.useState(DEFAULT_TODO_LIST);
  const [itemsLeft, setItemsLeft] = React.useState(0);
  React.useEffect(() => {
    switch (filter) {
      case "Active":
        setFilteredTodos(todos.filter((todo) => !todo.checked));
        break;
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.checked));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [filter, todos]);

  React.useEffect(() => {
    setItemsLeft(todos.filter((todo) => !todo.checked).length);
  }, [todos]);

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

  const changeFilter = (filter: Filter) => {
    setFilter(filter);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>
      <div className="content">
        <TodoPanel addTodo={addTodo} />
        <TodoList todos={filteredTodo} checkTodo={checkTodo} />
        <Footer
          itemsLeft={itemsLeft}
          changeFilter={changeFilter}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;
