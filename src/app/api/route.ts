import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import { getFilters } from "@/utils/getFilters";
import { getPriceRange } from "@/utils/getPriceRange"; // Import getPriceRange function
import { getRestaurants } from "@/utils/getRestaurants";
import { NextResponse } from "next/server";

export async function GET() {
  const filtersRes = await getFilters();
  const filters = filtersRes.filters;

  const res = await getRestaurants();
  const restaurants = await Promise.all(
    res.restaurants.map(async (restaurant: IRestaurant) => {
      const priceRangeData = await getPriceRange(restaurant.price_range_id);
      return { ...restaurant, price_range: priceRangeData.range };
    })
  );

  return NextResponse.json({
    filters,
    restaurants,
  });
}
