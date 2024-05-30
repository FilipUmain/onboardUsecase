"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeliveryTime from "./DeliveryTime";
import FilterContainer from "./FilterContainer";
import RestaurantCard from "./RestaurantCard";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import { getFilters } from "@/utils/getFilters";
import { getRestaurants } from "@/utils/getRestaurants";

const RestaurantInfoContainer = () => {
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<IFilter | null>(null);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState({
    min: 0,
    max: 100,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getRestaurants();
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

  // Filter restaurants based on selected time range
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.delivery_time_minutes >= selectedDeliveryTime.min &&
      restaurant.delivery_time_minutes <= selectedDeliveryTime.max &&
      (!selectedFilter || restaurant.filter_ids.includes(selectedFilter.id))
  );

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
      <DeliveryTime
        selectedDeliveryTime={selectedDeliveryTime}
        setSelectedDeliveryTime={setSelectedDeliveryTime}
      />
      <FilterContainer
        filters={filters}
        onFilterClick={handleFilterClick}
        selectedFilter={selectedFilter}
      />
      <section className="flex flex-col gap-3 w-full">
        <h2 className="text-[20px] my-3">Restaurants</h2>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </section>
    </>
  );
};

export default RestaurantInfoContainer;
