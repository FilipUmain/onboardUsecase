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
import FilterSideBar from "./FilterSideBar";
import { IPriceRange } from "@/models/IPriceRange";
import { getPriceRange } from "@/utils/getPriceRange";

const RestaurantInfoContainer = () => {
  const [filters, setFilters] = useState<IFilter[]>([]);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<IFilter | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState({
    min: 0,
    max: 100,
  });

  const NEXT_PUBLIC_WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;

  // Fetching all restaurants and Filters client side

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await getRestaurants();
  //       setRestaurants(res.restaurants);

  //       const filtersRes = await getFilters();
  //       setFilters(filtersRes.filters);
  //     } catch (error) {
  //       console.error("Failed to fetch data", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // Fetching restaurants and filters server side
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${NEXT_PUBLIC_WEBSITE_URL}api`, {
        method: "GET",
      });
      const data = await res.json();

      setFilters(data.filters);

      setRestaurants(data.restaurants);
    };

    getData();
  }, [NEXT_PUBLIC_WEBSITE_URL]);

  const handleFilterClick = (filter: IFilter) => {
    if (selectedFilter && selectedFilter.id === filter.id) {
      // Deselect
      setSelectedFilter(null);
    } else {
      // Select
      setSelectedFilter(filter);
    }
  };

  // filtered restaurants array that I map out.
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.delivery_time_minutes >= selectedDeliveryTime.min &&
      restaurant.delivery_time_minutes <= selectedDeliveryTime.max &&
      (!selectedFilter || restaurant.filter_ids.includes(selectedFilter.id)) &&
      (!selectedPriceRange || restaurant.price_range === selectedPriceRange)
  );

  console.log(selectedPriceRange);
  return (
    <section className="w-full">
      <div className="w-full mt-8 mb-4 lg:m-2 lg:mb-8">
        <div className="lg:hidden">
          <Image
            src="/images/logo.png"
            alt="restaurant image"
            width={170}
            height={24}
            priority={true}
            className="lg:mb-8"
          />
        </div>
        <div className="hidden lg:flex lg:flex-col w-full">
          <Image
            src="/images/logo.png"
            alt="restaurant image"
            width={280}
            height={280}
            priority={true}
            className="lg:mb-8"
          />
        </div>
      </div>

      <div className="lg:hidden w-full">
        <DeliveryTime
          selectedDeliveryTime={selectedDeliveryTime}
          setSelectedDeliveryTime={setSelectedDeliveryTime}
        />
      </div>

      <div className="w-full flex gap-[24px]">
        <div className="hidden lg:flex flex-col lg:w-[18%] bg-white rounded-[8px] p-6 border gap-3">
          <FilterSideBar
            filters={filters}
            onFilterClick={handleFilterClick}
            selectedFilter={selectedFilter}
            selectedDeliveryTime={selectedDeliveryTime}
            setSelectedDeliveryTime={setSelectedDeliveryTime}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
          />
        </div>
        <div className="lg:w-[75%] w-full">
          <FilterContainer
            filters={filters}
            onFilterClick={handleFilterClick}
            selectedFilter={selectedFilter}
          />
          <h2 className="text-[20px] lg:text-[40px] lg:mb-11 lg:mt-12 my-3">
            Restaurant&apos;s
          </h2>

          <section className="flex flex-col gap-[20px] w-full lg:grid lg:grid-cols-3">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default RestaurantInfoContainer;
