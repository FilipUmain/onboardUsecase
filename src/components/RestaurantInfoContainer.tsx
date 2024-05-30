"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeliveryTime from "./DeliveryTime";
import FilterContainer from "./FilterContainer";
import RestaurantCard from "./RestaurantCard";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import { getFilters } from "@/utils/getFilters";
import { getRestaraunts } from "@/utils/getRestaurants";

const RestaurantInfoContainer = () => {
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<IFilter | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRestaraunts();
        setRestaurants(res.restaurants);

        const filtersRes = await getFilters();
        setFilters(filtersRes.filters);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterClick = (filter: IFilter) => {
    setSelectedFilter(filter);
  };

  const filteredRestaurants = selectedFilter
    ? restaurants.filter((restaurant) =>
        restaurant.filter_ids.includes(selectedFilter.id)
      )
    : restaurants;

  console.log("Filters", filters);

  return (
    <>
      <div className="w-full m-8 mb-4">
        <Image
          src="/images/logo.png"
          alt="restaurant image"
          width={170}
          height={140}
        />
      </div>
      <DeliveryTime />
      <FilterContainer
        filters={filters}
        onFilterClick={handleFilterClick}
        selectedFilter={selectedFilter}
      />
      <section className="flex flex-col gap-3">
        <h2 className="text-[20px] my-3">Restaurant&apos;s</h2>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </>
  );
};

export default RestaurantInfoContainer;
