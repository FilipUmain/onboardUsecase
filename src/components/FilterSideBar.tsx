import React, { Dispatch, SetStateAction } from "react";
import DeliveryTime from "./DeliveryTime";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";

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
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl">Filter</h2>
      <h3 className="text-gray-400 my-2 font-semibold">FOOD CATEGORY</h3>
      {filters.map((filter) => (
        <span
          className={`p-3 border rounded-[8px] hover:bg-gray-100 cursor-pointer ${
            selectedFilter?.id === filter.id ? "bg-gray-200" : ""
          }`}
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
      <div className="flex gap-2">
        <span className="inline-block px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer w-max">
          $
        </span>
        <span className="inline-block px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer w-max">
          $$
        </span>
        <span className="inline-block px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer w-max">
          $$$
        </span>
        <span className="inline-block px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer w-max">
          $$$$
        </span>
      </div>
    </div>
  );
};

export default FilterSideBar;
