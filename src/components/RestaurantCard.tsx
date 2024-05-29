import { IRestaurant } from "@/models/IRestaurant";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: IRestaurantCardProps) => {
  return (
    <article
      className="bg-white p-3 w-full h-[202px] justify-between border rounded-[8px] flex flex-col relative"
      key={restaurant.id}
    >
      <div className="flex gap-[10px] max-h-[28px]">
        <div className="border rounded-full p-2 flex text-center justify-between items-center">
          <GoDotFill className="text-[#00703A] text-xl w-3" />
          Open
        </div>
        <div className="border rounded-full py-1 px-2 flex text-center justify-center items-center">
          <span>1 hour</span>
        </div>
      </div>
      <Image
        src={restaurant.image_url}
        alt="restaurant image"
        width={140}
        height={140}
        className="absolute top-[-30px] right-[-30px] overflow-hidden"
      />
      <div className="w-full h-10 flex justify-between items-center">
        <h1>{restaurant.name}</h1>
        <Link
          href={"Restaurant"}
          className="bg-[#00703A] h-[32px] w-[32px] text-2xl flex items-center justify-center rounded-[50%] text-white text-[14px]"
        >
          <GoArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default RestaurantCard;
