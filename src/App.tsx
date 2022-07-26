import React from "react";
import "./scss/App.scss";
import TodoPanel from "./components/TodoPanel/TodoPanel";
const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>todos</h1>
      </div>
      <div className="content">
        <TodoPanel />
      </div>
    </div>
  );
};

export default App;
