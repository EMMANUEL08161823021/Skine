"use client";

import React from "react";
import { Star, Plus } from "lucide-react";

const ProductSkeleton = () => {
  return (
    <article className="animate-pulse rounded-[28px] border border-[#19352A]/10 bg-white p-4">
      
      {/* IMAGE PLACEHOLDER */}
      <div className="relative flex h-[330px] items-center justify-center overflow-hidden rounded-[22px] bg-[#E7EFE2]">
        
        {/* Fake rating */}
        <div className="absolute right-3 top-3 flex h-9 w-16 items-center justify-center gap-1 rounded-full bg-[#F2F2F2]">
          <div className="h-3 w-6 rounded bg-[#D9D9D9]" />
          <Star size={12} className="text-[#D9D9D9]" />
        </div>

        {/* Fake product */}
        <div className="h-[290px] w-[230px] rounded-xl bg-[#D5E3D0]" />

      </div>


      {/* PRODUCT DETAILS */}
      <div className="px-1 pb-1 pt-5">

        {/* Category */}
        <div className="h-3 w-24 rounded bg-[#DDE5DD]" />

        {/* Product name */}
        <div className="mt-3 h-7 w-4/5 rounded bg-[#DDE5DD]" />

        {/* Skin type */}
        <div className="mt-3 h-4 w-32 rounded bg-[#E5EAE5]" />

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-[#E5EAE5]" />
          <div className="h-3 w-4/5 rounded bg-[#E5EAE5]" />
        </div>


        {/* BOTTOM */}
        <div className="mt-8 flex items-center justify-between">

          {/* Price */}
          <div className="h-7 w-28 rounded bg-[#DDE5DD]" />

          {/* Add button */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DDE5DD]">
            <Plus
              size={20}
              className="text-[#C6D0C6]"
            />
          </div>

        </div>

      </div>

    </article>
  );
};

export default ProductSkeleton;