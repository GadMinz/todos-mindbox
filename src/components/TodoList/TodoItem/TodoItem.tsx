import React from "react";
import s from "./TodoItem.module.scss";
import { Todo } from "../../../App";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={s.todo}>
      <div className={s.checkbox}>
        <input id={`check${todo.id}`} type="checkbox" />
        <label htmlFor={`check${todo.id}`}>
          <svg
            width="22"
            height="16"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
      </div>
      <div
        style={{
          opacity: todo.checked ? 0.5 : 1,
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        className={s.todo_title}
      >
        {todo.name}
      </div>
    </div>
  );
};

export default TodoItem;
