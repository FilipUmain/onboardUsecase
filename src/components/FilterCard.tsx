import React from "react";
import { IFilter } from "@/models/IFilter";
import Image from "next/image";

interface FilterCardProps {
  filter: IFilter;
  onClick: (filter: IFilter) => void;
  selectedFilter: IFilter | null;
}

const FilterCard = ({ filter, onClick, selectedFilter }: FilterCardProps) => {
  return (
    <div
      className={`hover:bg-gray-200 rounded-[8px] border p-3 min-h-[80px] min-w-[160px] flex justify-between relative cursor-pointer ${
        selectedFilter?.id === filter.id ? "bg-gray-200 !important" : "bg-white"
      }`}
      onClick={() => onClick(filter)}
    >
      <h2>{filter.name}</h2>
      <Image
        src={`https://work-test-web-2024-eze6j4scpq-lz.a.run.app${filter.image_url}`}
        alt="filter image"
        width={50}
        height={20}
        className="absolute right-[-8px] overflow-hidden"
      />
    </div>
  );
};

export default FilterCard;
