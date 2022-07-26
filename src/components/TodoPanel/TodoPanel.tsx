import React from "react";
import s from "./TodoPanel.module.scss";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

interface TodoPanelProps {}

const TodoPanel: React.FC<TodoPanelProps> = () => {
  return (
    <div className={s.todo_panel}>
        <div className={s.button}>
            <Arrow className={s.arrow} />
        </div>
      <input type="text" placeholder='Whats needs to be done?' />
    </div>
  );
};

export default TodoPanel;
