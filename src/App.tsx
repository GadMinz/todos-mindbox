import React from "react";
import "./scss/App.scss";
import TodoPanel from "./components/TodoPanel/TodoPanel";
import TodoList from "./components/TodoList/TodoList";
const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>
      <div className="content">
        <TodoPanel />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
