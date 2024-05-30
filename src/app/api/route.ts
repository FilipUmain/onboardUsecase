import { IFilter } from "@/models/IFilter";
import { IRestaurant } from "@/models/IRestaurant";
import { getFilters } from "@/utils/getFilters";
import { getRestaraunts } from "@/utils/getRestaurants";
import { NextResponse } from "next/server";

export async function GET() {
  const filtersRes = await getFilters();

  const filters = filtersRes.filters;

  const res = await getRestaraunts();

  const restaurants = res.restaurants;

  return NextResponse.json({
    filters,
    restaurants,
  });
}
