import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { IRestaurant } from "@/models/IRestaurant";
import { getRestaurant } from "@/utils/getRestaurant";
import Image from "next/image";
import React from "react";

interface RestaurantProps {
  searchParams: {
    id: string;
  };
}

const Restaurant = async ({ searchParams }: RestaurantProps) => {
  const restaurant: IRestaurant = await getRestaurant(searchParams.id);

  return (
    <section className="bg-[#FAFAFA] flex min-h-screen w-[100vw] flex-col justify-center items-center">
      <MaxWidthWrapper>
        <section className="w-full p-6 h-[90vh] border rounded-[8px] bg-white">
          <h1>{restaurant.name}</h1>
          <Image
            src={restaurant.image_url}
            height={100}
            width={100}
            alt="restaurant logo"
          />
        </section>
      </MaxWidthWrapper>
    </section>
  );
};

export default Restaurant;
