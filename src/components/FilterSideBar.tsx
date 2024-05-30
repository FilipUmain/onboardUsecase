import React, { Dispatch, SetStateAction } from "react";
import FilterContainer from "./FilterContainer";
import DeliveryTime from "./DeliveryTime";
import { IFilter } from "@/models/IFilter";

interface IFilterSideBarProps {
  filters: IFilter[];
  onFilterClick: (filter: IFilter) => void;
  selectedFilter: IFilter | null;
  selectedDeliveryTime: { min: number; max: number };
  setSelectedDeliveryTime: Dispatch<
    SetStateAction<{ min: number; max: number }>
  >;
}

const FilterSideBar = ({
  filters,
  onFilterClick,
  selectedFilter,
  selectedDeliveryTime,
  setSelectedDeliveryTime,
}: IFilterSideBarProps) => {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-2xl">Filter</h2>

      <h3 className="text-gray-400">FOOD CATEGORY</h3>
      {filters.map((filter) => (
        <span className="p-3 border rounded-[8px]">{filter.name}</span>
      ))}
      <DeliveryTime
        selectedDeliveryTime={selectedDeliveryTime}
        setSelectedDeliveryTime={setSelectedDeliveryTime}
      />
    </div>
  );
};

export default FilterSideBar;
