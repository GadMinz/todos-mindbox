import React from "react";
import s from "./Filters.module.scss";
import FilterItem from "./FilterItem/FilterItem";
import { Filter } from "../../../App";

interface FiltersProps {
  changeFilter: (filter: Filter) => void;
  filter: Filter;
}

const filtersItems: Filter[] = ["All", "Active", "Completed"];

const Filters: React.FC<FiltersProps> = ({ changeFilter, filter }) => {
  return (
    <div className={s.filters}>
      {filtersItems.map((filterItem: Filter) => (
        <FilterItem
          key={filterItem}
          title={filterItem}
          changeFilter={changeFilter}
          filter={filter}
        />
      ))}
    </div>
  );
};

export default Filters;
