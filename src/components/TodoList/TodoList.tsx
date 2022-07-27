import React from "react";
import { Todo } from "../../App";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, checkTodo }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <div style={{ textAlign: "center", padding: 20 }}>Empty</div>
      ) : (
        todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
