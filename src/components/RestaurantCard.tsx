import { IRestaurant } from "@/models/IRestaurant";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { getOpen } from "@/utils/getOpen";
import { IOpen } from "@/models/IOpen";
import { getPriceRange } from "@/utils/getPriceRange";

interface IRestaurantCardProps {
  restaurant: IRestaurant;
}

const RestaurantCard = ({ restaurant }: IRestaurantCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const openTimeData: IOpen = await getOpen(restaurant.id);
        const priceRangeData = await getPriceRange(restaurant.price_range_id);

        setIsOpen(openTimeData.is_open);
        setPriceRange(priceRangeData);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, [restaurant.id, restaurant.price_range_id]);

  const handleClick = () => {
    if (!isOpen) return;
    window.location.href = `Restaurant/?id=${restaurant.id}`;
  };

  return (
    <article
      onClick={handleClick}
      className="bg-white p-3 w-full h-[202px] justify-between border rounded-[8px] flex flex-col relative  overflow-hidden cursor-pointer"
    >
      <div className="flex gap-[10px] max-h-[28px]">
        <div className="border rounded-full p-2 flex justify-between items-center">
          <GoDotFill
            className={`text-xl w-3 ${
              isOpen ? "text-[#00703A]" : "text-black"
            }`}
          />
          <span className={isOpen ? "" : "opacity-50"}>
            {isOpen ? "Open" : "Closed"}
          </span>
        </div>
        <div className="border rounded-full py-1 px-2 flex justify-center items-center">
          <span>{restaurant.delivery_time_minutes} min</span>
        </div>
      </div>
      <Image
        src={`https://work-test-web-2024-eze6j4scpq-lz.a.run.app${restaurant.image_url}`}
        alt="restaurant image"
        width={140}
        height={140}
        className="absolute top-[-30px] right-[-25px]"
        style={{ opacity: isOpen ? 1 : 0.5 }}
      />
      {!isOpen && (
        <div className="relative w-full text-center">
          <span className="text-black p-2 border rounded-[4px] bg-gray-50">
            Opens tomorrow at 12 pm
          </span>
        </div>
      )}
      <div
        className="w-full h-10 flex justify-between items-center"
        style={{ opacity: isOpen ? 1 : 0.5 }}
      >
        <h1 style={{ opacity: isOpen ? 1 : 0.5 }}>{restaurant.name}</h1>
        {isOpen ? (
          <a
            href={`Restaurant/?id=${restaurant.id}`}
            className="bg-[#00703A] h-[32px] w-[32px] text-2xl flex items-center justify-center rounded-[50%] text-white text-[14px]"
          >
            <GoArrowRight />
          </a>
        ) : (
          <div
            className="bg-[#00703A] h-[32px] w-[32px] text-2xl flex items-center justify-center rounded-[50%] text-white text-[14px] opacity-50 cursor-not-allowed"
            style={{ pointerEvents: "none" }}
          >
            <GoArrowRight />
          </div>
        )}
      </div>
    </article>
  );
};

export default RestaurantCard;
