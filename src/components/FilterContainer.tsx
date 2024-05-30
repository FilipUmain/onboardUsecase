"use client";

import { useState } from "react";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import FilterCard from "@/components/FilterCard";
import RestaurantCard from "@/components/RestaurantCard";

interface FilterContainerProps {
  filters: IFilter[];
  restaurants: IRestaurant[];
}

const FilterContainer = ({ filters, restaurants }: FilterContainerProps) => {
  const [selectedFilter, setSelectedFilter] = useState<IFilter | null>(null);

  const handleFilterClick = (filter: IFilter) => {
    setSelectedFilter(filter);
  };

  const filteredRestaurants = selectedFilter
    ? restaurants.filter((restaurant) =>
        restaurant.filter_ids.includes(selectedFilter.id)
      )
    : restaurants;

  return (
    <>
      <section className="flex gap-[10px] overflow-x-auto w-full">
        {filters.map((filter) => (
          <FilterCard
            filter={filter}
            key={filter.id}
            onClick={handleFilterClick}
          />
        ))}
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[20px] my-3">Restaurant&apos;s</h2>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </>
  );
};

export default FilterContainer;
