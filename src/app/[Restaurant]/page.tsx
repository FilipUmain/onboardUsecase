import { IRestaurant } from "@/models/IRestaurant";
import { getRestaurant } from "@/utils/getRestaurant";
import React from "react";

interface RestaurantProps {
  searchParams: {
    id: string;
  };
}

const Restaurant = async ({ searchParams }: RestaurantProps) => {
  const restaurant: IRestaurant = await getRestaurant(searchParams.id);

  console.log(restaurant);

  return <div>{restaurant.name}</div>;
};

export default Restaurant;
