"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Foaming Cleanser",
    category: "Cleansers",
    skinType: "Normal to Oily Skin",
    description:
      "Gently cleanses and removes excess oil without disrupting the skin barrier.",
    price: "₦18,500",
    rating: "4.9",
    image: "/products/teatree.jpg",
  },

  {
    id: 2,
    name: "Hydrating Cleanser",
    category: "Cleansers",
    skinType: "Normal to Dry Skin",
    description:
      "Cleanses and hydrates while helping restore the skin's natural protective barrier.",
    price: "₦20,000",
    rating: "5.0",
    image: "/images/products/hydrating-cleanser.png",
  },

  {
    id: 3,
    name: "Moisturizing Lotion",
    category: "Moisturizers",
    skinType: "Dry to Very Dry Skin",
    description:
      "Provides long-lasting hydration while helping restore and maintain the skin barrier.",
    price: "₦22,000",
    rating: "4.8",
    image: "/images/products/moisturizing-lotion.png",
  },

  {
    id: 4,
    name: "Daily Moisturizing Cream",
    category: "Moisturizers",
    skinType: "Normal to Dry Skin",
    description:
      "A rich yet lightweight moisturizer that keeps your skin hydrated throughout the day.",
    price: "₦24,500",
    rating: "4.9",
    image: "/images/products/moisturizing-cream.png",
  },
];

const categories = [
  "All Products",
  "Cleansers",
  "Moisturizers",
];

const Products = () => {
     const [activeCategory, setActiveCategory] = useState("All Products");

     const filteredProducts =
     activeCategory === "All Products"
          ? products
          : products.filter(
               (product) => product.category === activeCategory
          );

     return (
          <section
               id="products"
               className="w-full bg-[#F8F5EC] px-5 py-20 md:px-10 lg:px-14"
          >
               <div className="mx-auto max-w-[1500px]">

               {/* ================= HEADER ================= */}
               <div className="text-center">

                    <h2 className="font-heading text-[var(--accent)] text-5xl font-bold leading-[0.9] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                    OUR SKINCARE
                    <br />
                    ESSENTIALS
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-sm font-medium leading-6 text-[#536B5A] md:text-base">
                    Dermatologist-developed skincare made to cleanse,
                    hydrate, and help your skin maintain its natural barrier.
                    </p>

               </div>

               {/* ================= CATEGORY FILTER ================= */}
               <div className="mt-10 flex flex-wrap items-center justify-center gap-3">

                    {categories.map((category) => {
                    const isActive = activeCategory === category;

                    return (
                    <button
                         key={category}
                         onClick={() => setActiveCategory(category)}
                         className={`rounded-full px-6 py-3 font-sans text-xs font-bold transition-all duration-300 md:text-sm ${
                         isActive
                              ? "bg-[#19352A] text-white shadow-md"
                              : "bg-[#E8E4D8] text-[#19352A] hover:bg-[#DAD5C7]"
                         }`}
                    >
                         {category}
                    </button>
                    );
                    })}

               </div>

               {/* ================= PRODUCTS ================= */}
               <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {filteredProducts.map((product) => (

                    <article
                         key={product.id}
                         className="
                         group
                         rounded-[28px]
                         border border-[var(--accent)]/10
                         bg-white
                         p-4
                         transition-all
                         duration-500
                         hover:-translate-y-2
                         hover:shadow-xl
                         "
                    >

                         {/* IMAGE CONTAINER */}
                         <div
                              className="
                              border border-black
                                   relative
                                   flex
                                   h-[330px]
                                   items-center
                                   justify-center
                                   overflow-hidden
                                   rounded-[22px]
                                   bg-[var(--accentLight)]
                                   transition-colors
                                   duration-500
                              "
                         >
                    

                         {/* Rating */}
                         <div className="absolute right-3 top-3 z-20 flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">

                              <span className="font-sans text-xs font-bold text-[var(--accent)] transition-colors duration-500">
                              {product.rating}
                              </span>

                              <Star
                              size={12}
                              fill="currentColor"
                              className="text-[var(--accent)] transition-colors duration-500"
                              />

                         </div>


                         {/* Product Image */}
                         {/* <div className="relative h-[290px] w-[230px] border border-black transition-transform duration-500 group-hover:scale-105">

                              <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain drop-shadow-[0_20px_20px_rgba(25,53,42,0.15)]"
                              />

                         </div> */}
                         <div className="relative h-full w-full">
                              <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain "
                              />
                         </div>

                         </div>


                         {/* PRODUCT DETAILS */}
                         <div className="px-1 pb-1 pt-5">

                         {/* Category */}
                         <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-colors duration-500">
                              {product.category}
                         </p>


                         {/* Name */}
                         <h3 className="mt-2 font-heading text-2xl font-semibold leading-none text-[#19352A]">
                              {product.name}
                         </h3>


                         {/* Skin Type */}
                         <p className="mt-2 font-sans text-xs font-bold text-[#536B5A]">
                              {product.skinType}
                         </p>


                         {/* Description */}
                         <p className="mt-3 min-h-[48px] font-sans text-sm leading-5 text-[#657267]">
                              {product.description}
                         </p>


                         {/* Bottom */}
                         <div className="mt-6 flex items-center justify-between">

                              {/* Price */}
                              <span className="font-heading text-2xl font-bold text-[var(--accent)] transition-colors duration-500">
                              {product.price}
                              </span>


                              {/* Add button */}
                              <button
                              aria-label={`Add ${product.name} to cart`}
                              className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-full
                              bg-[var(--accent)]
                              text-white
                              shadow-md
                              transition-all
                              duration-500
                              hover:scale-110
                              "
                              >
                              <Plus size={20} />
                              </button>

                         </div>

                         </div>

                    </article>

                    ))}

               </div>

               </div>
          </section>
     );
};

export default Products;