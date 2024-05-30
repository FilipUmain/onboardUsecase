import DeliveryTime from "@/components/DeliveryTime";
import FilterCard from "@/components/FilterCard";
import FilterContainer from "@/components/FilterContainer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RestaurantCard from "@/components/RestaurantCard";
import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import { fetchServer } from "@/utils/fetchServer";
import { getFilters } from "@/utils/getFilters";

import { getRestaraunts } from "@/utils/getRestaurants";
import Image from "next/image";

export default async function Home() {
  const serverData = await fetchServer();

  const restaurants: IRestaurant[] = serverData.restaurants;

  const filters: IFilter[] = serverData.filters;

  console.log("Filters: ", filters);

  console.log("Restaurants: ", restaurants);

  return (
    <main className="bg-[#FAFAFA] flex min-h-screen w-[100vw] flex-col justify-between items-center">
      <MaxWidthWrapper>
        <div className="w-full m-8 mb-4">
          <Image
            src="/images/logo.png"
            alt="restaurant image"
            width={170}
            height={140}
          />
        </div>
        <DeliveryTime />
        <FilterContainer filters={filters} restaurants={restaurants} />
        <section className="flex flex-col gap-3">
          <h2 className="text-[20px] my-3">Restaurant&apos;s</h2>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
