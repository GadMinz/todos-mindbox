import React from "react";
import s from "./Footer.module.scss";
import Filters from "./Filters/Filters";
import { Filter } from "../../App";

interface FooterProps {
  changeFilter: (filter: Filter) => void;
  filter: Filter;
  itemsLeft: number;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({
  changeFilter,
  filter,
  itemsLeft,
  clearCompleted,
}) => {
  return (
    <div className={s.footer}>
      <div className={s.items_left}>{itemsLeft} items left</div>
      <Filters changeFilter={changeFilter} filter={filter} />
      <div className={s.clear} onClick={clearCompleted}>
        Clear completed
      </div>
    </div>
  );
};

export default Footer;
