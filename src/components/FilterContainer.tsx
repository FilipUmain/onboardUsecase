import React from "react";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
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
          isSelected={selectedFilter?.id === filter.id}
        />
      ))}
    </section>
  );
};

export default FilterContainer;
