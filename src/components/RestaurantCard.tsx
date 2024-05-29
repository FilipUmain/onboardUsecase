import { IRestaurant } from "@/models/IRestaurant";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { getOpen } from "@/utils/getOpen";
import { IOpen } from "@/models/IOpen";
import { getPriceRange } from "@/utils/getPriceRange";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = async ({ restaurant }: IRestaurantCardProps) => {
  const openData: IOpen = await getOpen(restaurant.id);
  let isOpen: boolean = openData.is_open;

  const priceRageData = await getPriceRange(restaurant.price_range_id);

  console.log("hej", priceRageData);

  // console.log(openData);

  return (
    <article className="bg-white p-3 w-full h-[202px] justify-between border rounded-[8px] flex flex-col relative  overflow-hidden ">
      <div className="flex gap-[10px] max-h-[28px]">
        <div className="border rounded-full p-2 flex justify-between items-center">
          <GoDotFill
            className={`text-xl w-3 ${
              isOpen ? "text-[#00703A]" : "text-black"
            }`}
          />
          <span className="text-black">{isOpen ? "Open" : "Closed"}</span>
        </div>
        <div className="border rounded-full py-1 px-2 flex justify-center items-center">
          <span>{restaurant.delivery_time_minutes} min</span>
        </div>
      </div>
      <Image
        src={restaurant.image_url}
        alt="restaurant image"
        width={140}
        height={140}
        className="absolute top-[-30px] right-[-10px]"
      />
      <div className="w-full h-10 flex justify-between items-center">
        <h1>{restaurant.name}</h1>
        <Link
          href={`Restaurant/?id=${restaurant.id}`}
          className="bg-[#00703A] h-[32px] w-[32px] text-2xl flex items-center justify-center rounded-[50%] text-white text-[14px]"
        >
          <GoArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default RestaurantCard;
