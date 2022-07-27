import React from "react";
import s from "./TodoPanel.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

interface TodoPanelProps {
  addTodo: (name: string) => void;
}

const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    if (todo.length === 0 || !todo.trim()) {
      alert("Empty value");
      return;
    }
    addTodo(todo);
    setTodo("");
  };
  return (
    <div className={s.todo_panel}>
      <div className={s.button} onClick={onClick}>
        <Arrow className={s.arrow} />
      </div>
      <input
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="Whats needs to be done?"
      />
    </div>
  );
};

export default TodoPanel;
