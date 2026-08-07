"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = ({ product }) => {
  const pillarsLeft = [
    {
      number: "01",
      title: "Dermatologist Developed",
      description:
        "Thoughtfully formulated with skin health in mind, combining effective ingredients with gentle care for your everyday routine.",
    },
    {
      number: "02",
      title: "Barrier First",
      description:
        "We believe healthy skin starts with a strong barrier, so every formula is designed to cleanse, hydrate, and support your skin.",
    },
  ];

  const pillarsRight = [
    {
      number: "03",
      title: "Skin-Loving Ingredients",
      description:
        "Carefully selected ingredients work together to nourish your skin without making your routine unnecessarily complicated.",
    },
    {
      number: "04",
      title: "Simple Daily Rituals",
      description:
        "Effective skincare shouldn't feel complicated. We make it easier to build a routine that works beautifully every day.",
    },
  ];

  return (
    <section
      id="about"
   
      className="w-full bg-[var(--accent)] transition-colors px-5 py-24 text-white md:px-10 lg:px-14"
    >
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col">

        {/* HEADER */}
        <div className="text-center">

          <h2
            className="
              font-heading
              text-5xl
              font-bold
              leading-[0.9]
              tracking-[-0.04em]
              transition-colors
              duration-500
              md:text-6xl
              lg:text-7xl
            "
          >
            ABOUT OUR
            <br />
            SKINCARE
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm font-medium leading-6 text-white/65 md:text-base">
            Thoughtfully formulated skincare designed to nourish your skin,
            support your natural barrier, and simplify your daily ritual.
          </p>

        </div>


        {/* CONTENT */}
        <div className="mt-14 grid flex-1 grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px_1fr] lg:gap-16">

          {/* LEFT PILLARS */}
          <div className="flex flex-col gap-12">

            {pillarsLeft.map((pillar) => (
              <div key={pillar.number} className="relative">

                {/* Number */}
                <span
                  className="
                    absolute
                    -top-8
                    left-0
                    font-heading
                    text-7xl
                    font-bold
                    leading-none
                    text-[var(--accent)]
                    opacity-10
                    transition-colors
                    duration-500
                  "
                >
                  {pillar.number}
                </span>

                <div className="relative z-10">

                  <h3 className="font-heading text-2xl font-semibold md:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 max-w-md font-sans text-sm leading-6 text-white/60 md:text-base">
                    {pillar.description}
                  </p>

                </div>

              </div>
            ))}

          </div>


          {/* CENTER PRODUCT */}
          <div className="flex flex-col items-center justify-center">

            <div className="relative flex h-[390px] w-full items-center justify-center md:h-[440px]">

              {/* Soft glow */}
              <div
                className="
                  absolute
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-[var(--accent)]
                  opacity-20
                  blur-3xl
                  transition-colors
                  duration-700
                "
              />

              {/* Product */}
              <div className="relative z-10 h-[450px] w-[320px] transition-transform duration-500 hover:scale-105">

                <Image
                  src="/products/hydrating-cleanser.png"
                  alt="Hydrating Facial Cleanser"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.35)]"
                />

              </div>

            </div>


            {/* CTA */}
            <Link
              href="#products"
              className="
                mt-4
                rounded-full
                bg-[var(--accent)]
                px-8
                py-4
                font-sans
                text-sm
                font-bold
                text-white
                shadow-[0_5px_0_rgba(0,0,0,0.3)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_8px_0_rgba(0,0,0,0.3)]
              "
            >
              SHOP OUR ROUTINE
            </Link>

          </div>


          {/* RIGHT PILLARS */}
          <div className="flex flex-col gap-12">

            {pillarsRight.map((pillar) => (
              <div key={pillar.number} className="relative">

                {/* Number */}
                <span
                  className="
                    absolute
                    -top-8
                    left-0
                    font-heading
                    text-7xl
                    font-bold
                    leading-none
                    text-[var(--accent)]
                    opacity-10
                    transition-colors
                    duration-500
                  "
                >
                  {pillar.number}
                </span>

                <div className="relative z-10">

                  <h3 className="font-heading text-2xl font-semibold md:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 max-w-md font-sans text-sm leading-6 text-white/60 md:text-base">
                    {pillar.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;