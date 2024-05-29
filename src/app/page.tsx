import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import RestaurantCard from "@/components/RestaurantCard";
import { IRestaurant } from "@/models/IRestaurant";
import { getRestaraunts } from "@/utils/getRestaurants";

export default async function Home() {
  const res = await getRestaraunts();

  const restaurants: IRestaurant[] = res.restaurants;

  return (
    <main className="bg-[#FAFAFA] flex min-h-screen w-[100vw] flex-col items-center justify-between items-center">
      <MaxWidthWrapper>
        <section className="w-[90%] lg:w-[80%] flex flex-col gap-3">
          <h2 className="text-[20px]">Restaurant's</h2>
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </section>
      </MaxWidthWrapper>
    </main>
  );
}
