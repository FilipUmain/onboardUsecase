"use client";

import { IFilter } from "@/models/IFilter";
import React, { useState } from "react";

const DeliveryTime = () => {
  const [selectedFilter, setSelectedFilter] = useState<IFilter>();

  return (
    <div className="flex flex-col w-full mb-6">
      <h3 className="text-gray-400 font-semibold my-3">DELIVERY TIME</h3>
      <div className="flex justify-between">
        <span className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border">
          0-10 min
        </span>
        <span className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border">
          10-30 min
        </span>
        <span className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border">
          30-60 min
        </span>
        <span className="bg-white hover:bg-gray-200 py-2 px-3 rounded-[8px] border">
          1 hour+
        </span>
      </div>
    </div>
  );
};

export default DeliveryTime;
