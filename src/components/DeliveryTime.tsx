"use client";

import React, { Dispatch, SetStateAction } from "react";

interface Props {
  selectedDeliveryTime: { min: number; max: number };
  setSelectedDeliveryTime: Dispatch<
    SetStateAction<{ min: number; max: number }>
  >;
}

const DeliveryTime = ({
  selectedDeliveryTime,
  setSelectedDeliveryTime,
}: Props) => {
  const handleDeliveryTimeClick = (minTime: number, maxTime: number) => {
    setSelectedDeliveryTime({ min: minTime, max: maxTime });
  };

  return (
    <div className="flex flex-col w-full mb-6">
      <h3 className="text-gray-400 font-semibold my-3">DELIVERY TIME</h3>
      <div className="flex justify-between">
        <span
          className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border"
          onClick={() => handleDeliveryTimeClick(0, 10)}
        >
          0-10 min
        </span>
        <span
          className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border"
          onClick={() => handleDeliveryTimeClick(10, 30)}
        >
          10-30 min
        </span>
        <span
          className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border"
          onClick={() => handleDeliveryTimeClick(30, 60)}
        >
          30-60 min
        </span>
        <span
          className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border"
          onClick={() => handleDeliveryTimeClick(60, 120)}
        >
          1 hour+
        </span>
      </div>
    </div>
  );
};

export default DeliveryTime;
