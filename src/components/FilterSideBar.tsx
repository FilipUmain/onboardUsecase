import React, { Dispatch, SetStateAction } from "react";
import DeliveryTime from "./DeliveryTime";
import { IFilter } from "@/models/IFilter";
import { IPriceRange } from "@/models/IPriceRange";

interface IFilterSideBarProps {
  filters: IFilter[];
  onFilterClick: (filter: IFilter) => void;
  selectedFilter: IFilter | null;
  selectedDeliveryTime: { min: number; max: number };
  setSelectedDeliveryTime: Dispatch<
    SetStateAction<{ min: number; max: number }>
  >;
  setSelectedPriceRange: Dispatch<SetStateAction<string>>;
  selectedPriceRange: string;
}

const FilterSideBar = ({
  filters,
  onFilterClick,
  selectedFilter,
  selectedDeliveryTime,
  setSelectedDeliveryTime,
  selectedPriceRange,
  setSelectedPriceRange,
}: IFilterSideBarProps) => {
  // Selecting price_range
  const handlePriceRangeClick = (priceRange: string) => {
    if (selectedPriceRange == priceRange) {
      setSelectedPriceRange("");
    } else {
      setSelectedPriceRange(priceRange);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl">Filter</h2>
      <h3 className="text-gray-400 my-2 font-semibold">FOOD CATEGORY</h3>
      <div className="flex flex-col gap-2">
        {filters.map((filter) => (
          <span
            key={filter.id}
            className={`inline-block px-3 py-2 border rounded-[8px] hover:bg-gray-100 cursor-pointer ${
              selectedFilter?.id === filter.id ? "bg-gray-200" : ""
            }`}
            onClick={() => onFilterClick(filter)}
            style={{ width: "max-content" }}
          >
            {filter.name}
          </span>
        ))}
      </div>
      <DeliveryTime
        selectedDeliveryTime={selectedDeliveryTime}
        setSelectedDeliveryTime={setSelectedDeliveryTime}
      />
      <h3 className="text-gray-400 my-2 font-semibold">PRICE RANGE</h3>
      <div className="flex flex-wrap gap-2">
        <span
          className={`px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer ${
            selectedPriceRange === "$" ? "bg-gray-200" : ""
          }`}
          onClick={() => handlePriceRangeClick("$")}
        >
          $
        </span>
        <span
          className={`px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer ${
            selectedPriceRange === "$$" ? "bg-gray-200" : ""
          }`}
          onClick={() => handlePriceRangeClick("$$")}
        >
          $$
        </span>
        <span
          className={`px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer ${
            selectedPriceRange === "$$$" ? "bg-gray-200" : ""
          }`}
          onClick={() => handlePriceRangeClick("$$$")}
        >
          $$$
        </span>
        <span
          className={`px-3 py-2 border rounded-[8px] hover:bg-gray-200 cursor-pointer ${
            selectedPriceRange === "$$$$" ? "bg-gray-200" : ""
          }`}
          onClick={() => handlePriceRangeClick("$$$$")}
        >
          $$$$
        </span>
      </div>
    </div>
  );
};

export default FilterSideBar;
