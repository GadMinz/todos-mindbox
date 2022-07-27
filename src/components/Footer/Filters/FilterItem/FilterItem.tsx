import React from "react";
import s from "./FilterItem.module.scss";
import { Filter } from "../../../../App";

interface FilterItemProps {
  title: Filter;
  filter: Filter;
  changeFilter: (filter: Filter) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({
  title,
  changeFilter,
  filter,
}) => {
  return (
    <div
      onClick={() => changeFilter(title)}
      className={`${s.filter} ${title === filter ? s.active : ""}`}
    >
      {title}
    </div>
  );
};

export default FilterItem;
