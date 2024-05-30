import React from "react";
import { IFilter } from "@/models/IFilter";
import FilterCard from "./FilterCard";

interface FilterContainerProps {
  filters: IFilter[];
  onFilterClick: (filter: IFilter) => void;
  selectedFilter: IFilter | null;
}

const FilterContainer = ({
  filters,
  onFilterClick,
  selectedFilter,
}: FilterContainerProps) => {
  return (
    <section className="flex gap-[10px] overflow-x-auto w-full">
      {filters.map((filter) => (
        <FilterCard
          filter={filter}
          key={filter.id}
          onClick={onFilterClick}
          selectedFilter={selectedFilter}
        />
      ))}
    </section>
  );
};

export default FilterContainer;
