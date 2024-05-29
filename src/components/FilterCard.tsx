import { IFilter } from "@/models/IFilter";
import Image from "next/image";
import React from "react";

interface FilterCardProps {
  filter: IFilter;
}

const FilterCard = ({ filter }: FilterCardProps) => {
  return (
    <div className=" bg-white rounded-[8px] border p-3 min-h-[80px] min-w-[160px] flex justify-between relative">
      <h2>{filter.name}</h2>
      <Image
        src={filter.image_url}
        alt="restaurant image"
        width={50}
        height={20}
        className="absolute right-0"
      />
    </div>
  );
};

export default FilterCard;
