import React from "react";
import { IFilter } from "@/models/IFilter";
import Image from "next/image";

interface FilterCardProps {
  filter: IFilter;
  onClick: (filter: IFilter) => void;
  isSelected: boolean;
}

const FilterCard = ({ filter, onClick, isSelected }: FilterCardProps) => {
  return (
    <div
      className={`hover:bg-gray-200 bg-white rounded-[8px] border p-3 min-h-[80px] min-w-[160px] flex justify-between relative cursor-pointer ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={() => onClick(filter)}
    >
      <h2>{filter.name}</h2>
      <Image
        src={filter.image_url}
        alt="filter image"
        width={50}
        height={20}
        className="absolute right-0"
      />
    </div>
  );
};

export default FilterCard;
