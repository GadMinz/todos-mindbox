import React from "react";
import s from "./Footer.module.scss";
import Filters from "./Filters/Filters";
import { Filter } from "../../App";

interface FooterProps {
  changeFilter: (filter: Filter) => void;
  filter: Filter;
  itemsLeft: number;
}

const Footer: React.FC<FooterProps> = ({ changeFilter, filter, itemsLeft }) => {
  return (
    <div className={s.footer}>
      <div className={s.items_left}>{itemsLeft} items left</div>
      <Filters changeFilter={changeFilter} filter={filter} />
      <div className={s.clear}>Clear completed</div>
    </div>
  );
};

export default Footer;
