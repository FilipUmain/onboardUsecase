import React, { Dispatch, SetStateAction } from "react";
import FilterContainer from "./FilterContainer";
import DeliveryTime from "./DeliveryTime";
import { IFilter } from "@/models/IFilter";
import { getPriceRange } from "@/utils/getPriceRange";
import { IRestaurant } from "@/models/IRestaurant";
import { IPriceRange } from "@/models/IPriceRange";

interface IFilterSideBarProps {
  filters: IFilter[];
  restaurants: IRestaurant[];
  onFilterClick: (filter: IFilter) => void;
  selectedFilter: IFilter | null;
  selectedDeliveryTime: { min: number; max: number };
  setSelectedDeliveryTime: Dispatch<
    SetStateAction<{ min: number; max: number }>
  >;
}

const FilterSideBar = ({
  filters,
  restaurants,
  onFilterClick,
  selectedFilter,
  selectedDeliveryTime,
  setSelectedDeliveryTime,
}: IFilterSideBarProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl">Filter</h2>
      <h3 className="text-gray-400 my-2 font-semibold">FOOD CATEGORY</h3>
      {filters.map((filter) => (
        <span
          className="p-3 border rounded-[8px] hover:bg-gray-100"
          onClick={() => onFilterClick(filter)}
          key={filter.id}
        >
          {filter.name}
        </span>
      ))}
      <DeliveryTime
        selectedDeliveryTime={selectedDeliveryTime}
        setSelectedDeliveryTime={setSelectedDeliveryTime}
      />
      <h3 className="text-gray-400 my-2 font-semibold">PRICE RANGE</h3>
      <div className="flex gap-3">
        <span className="p-3 border rounded-[8px] hover:bg-gray-200">$</span>
        <span className="p-3 border rounded-[8px] hover:bg-gray-200">$$</span>
        <span className="p-3 border rounded-[8px] hover:bg-gray-200">$$$</span>
        <span className="p-3 border rounded-[8px] hover:bg-gray-200">$$$$</span>
      </div>
    </div>
  );
};

export default FilterSideBar;
