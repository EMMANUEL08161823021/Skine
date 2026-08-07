"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, RotateCcw } from "lucide-react";

const skinConcerns = [
  {
    id: "dryness",
    icon: "💧",
    title: "Dryness & Dehydration",
    description: "My skin often feels dry, tight or flaky.",
  },
  {
    id: "oiliness",
    icon: "✨",
    title: "Oiliness",
    description: "My skin gets shiny or oily during the day.",
  },
  {
    id: "breakouts",
    icon: "🌿",
    title: "Breakouts",
    description: "I frequently deal with blemishes or clogged pores.",
  },
  {
    id: "sensitivity",
    icon: "🌸",
    title: "Sensitivity",
    description: "My skin is easily irritated or reactive.",
  },
];

const skinTypes = [
  {
    id: "dry",
    title: "Dry",
    description: "Usually feels tight or lacks moisture.",
  },
  {
    id: "oily",
    title: "Oily",
    description: "Often looks shiny or produces excess oil.",
  },
  {
    id: "combination",
    title: "Combination",
    description: "Oily in some areas and dry in others.",
  },
  {
    id: "normal",
    title: "Balanced",
    description: "Generally comfortable and well-balanced.",
  },
];

const recommendations = {
  dryness: {
    title: "Hydration & Barrier Care",
    description:
      "Your answers suggest that your routine should focus on restoring hydration and supporting your skin's natural protective barrier.",
    products: [
      "Hydrating Cleanser",
      "Moisturizing Lotion",
    ],
  },

  oiliness: {
    title: "Gentle Balance",
    description:
      "Your routine should focus on removing excess oil without over-stripping your skin, while maintaining healthy hydration.",
    products: [
      "Foaming Cleanser",
      "Lightweight Moisturizer",
    ],
  },

  breakouts: {
    title: "Clarifying & Balanced Care",
    description:
      "A simple routine focused on gentle cleansing, hydration and skin-barrier support can help keep breakout-prone skin balanced.",
    products: [
      "Foaming Cleanser",
      "Daily Moisturizing Lotion",
    ],
  },

  sensitivity: {
    title: "Gentle Barrier Support",
    description:
      "Your skin may benefit from a minimal routine focused on gentle cleansing, hydration and maintaining the skin barrier.",
    products: [
      "Hydrating Cleanser",
      "Moisturizing Lotion",
    ],
  },
};

const Features = ({product}) => {
     const [step, setStep] = useState(1);
     const [concern, setConcern] = useState(null);
     const [skinType, setSkinType] = useState(null);
     const [result, setResult] = useState(null);

     const handleConcern = (value) => {
     setConcern(value);
     setStep(2);
     };

     const handleSkinType = (value) => {
     setSkinType(value);

     const recommendation = recommendations[concern];

     setResult(recommendation);
     setStep(3);
     };

  const resetFinder = () => {
    setStep(1);
    setConcern(null);
    setSkinType(null);
    setResult(null);
  };

  return (
    <section
          style={{
          "--accent": product?.accent || "#B5284D",
          "--accent-light": product?.accentLight || "#F8DDE3",
          "--product-text": product?.text || "#321720",
          }}
          id="skin-finder"
          className="w-full px-5 py-20 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* =========================================
            MAIN CARD
        ========================================= */}

        <div className="overflow-hidden rounded-[38px] bg-white px-6 py-14 shadow-[0_25px_70px_rgba(80,30,40,0.08)] md:px-12 lg:px-20 lg:py-20">

          {/* =====================================
              HEADER
          ===================================== */}

          <div className="mx-auto max-w-4xl text-center">

               <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-5 py-2">
                    <Sparkles
                    size={15}
                    className="text-[var(--accent)]"
                    />

                    <span className="font-sans text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
                    Expert-Informed Skin Finder
                    </span>
                    </div>

                    <h2 className="mt-7 font-heading text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-[var(--accent)] transition-colors duration-500 md:text-6xl lg:text-7xl">
                    FIND THE RIGHT
                    <br />
                    ROUTINE FOR YOUR SKIN
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl font-sans text-sm leading-6 text-[#795763] md:text-base">
                    Answer a few quick questions and discover skincare
                    recommendations based on your skin concerns and
                    expert-informed routine principles.
                    </p>

               </div>


               {/* =====================================
               PROGRESS
               ===================================== */}

               {step !== 3 && (
               <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3">

               <span
                    className={`h-2 rounded-full transition-all ${
                    step >= 1
                         ? "w-16 bg-[var(--accent)]"
                         : "w-8 bg-[#E9D8DD]"
                    }`}
               />

               <span
                    className={`h-2 rounded-full transition-all ${
                    step >= 2
                         ? "w-16 bg-[var(--accent)]"
                         : "w-8 bg-[#E9D8DD]"
                    }`}
               />

               <span
                    className="h-2 w-8 rounded-full bg-[#E9D8DD]"
               />

               </div>
               )}


               {/* =====================================
               STEP 1
               ===================================== */}

               {step === 1 && (
                    <div className="mx-auto mt-12 max-w-6xl">

                         <h3 className="text-center font-heading text-2xl font-semibold text-[#321720] md:text-3xl">
                              What is your main skin concern?
                         </h3>

                         <p className="mt-2 text-center font-sans text-sm text-[#856872]">
                              Choose the one that best describes your skin right now.
                         </p>

                         <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                              {skinConcerns.map((item) => (
                              <button
                                   key={item.id}
                                   onClick={() => handleConcern(item.id)}
                                   className="
                                   group
                                   rounded-3xl
                                   border border-[#F1D4DB]
                                   bg-white
                                   p-6
                                   text-left
                                   transition-all
                                   duration-500
                                   hover:-translate-y-1
                                   hover:border-[var(--accent)]
                                   hover:shadow-lg
                                   "
                              >

                                   <div className="text-3xl">
                                   {item.icon}
                                   </div>

                                   <h4 className="mt-5 font-heading text-xl font-semibold text-[#321720]">
                                   {item.title}
                                   </h4>

                                   <p className="mt-2 font-sans text-sm leading-5 text-[#856872]">
                                   {item.description}
                                   </p>

                                   <div className="mt-5 flex items-center gap-2 font-sans text-xs font-bold text-[var(--accent)]">
                                   SELECT

                                   <ArrowRight
                                   size={14}
                                   className="transition-transform group-hover:translate-x-1"
                                   />
                                   </div>

                              </button>
                              ))}

                         </div>

                    </div>
               )}


               {/* =====================================
               STEP 2
               ===================================== */}

               {step === 2 && (
                    <div className="mx-auto mt-12 max-w-5xl">

                         <button
                              onClick={() => setStep(1)}
                              className="mx-auto mb-8 block font-sans text-xs font-bold text-[#B5284D]"
                         >
                              ← BACK
                         </button>

                         <h3 className="text-center font-heading text-2xl font-semibold text-[#321720] md:text-3xl">
                              How does your skin usually feel?
                         </h3>

                         <p className="mt-2 text-center font-sans text-sm text-[#856872]">
                              This helps us refine your routine recommendation.
                         </p>

                         <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">

                              {skinTypes.map((item) => (
                              <button

                              key={item.id}
                              onClick={() => handleSkinType(item.id)}
                              className="
                              group
                              rounded-3xl
                              border border-[#F1D4DB]
                              p-6
                              text-left
                              transition-all
                              duration-500
                              hover:-translate-y-1
                              hover:border-[var(--accent)]
                              hover:shadow-lg
                              "
                              >

                                   <h4 className="font-heading text-xl font-semibold text-[#321720]">
                                   {item.title}
                                   </h4>

                                   <p className="mt-2 font-sans text-sm text-[#856872]">
                                   {item.description}
                                   </p>

                                   <div className="mt-5 flex items-center gap-2 font-sans text-xs font-bold text-[var(--accent)]">
                                        SELECT

                                        <ArrowRight
                                        size={14}
                                        className="transition-transform group-hover:translate-x-1"
                                        />
                                   </div>

                              </button>
                              ))}

                         </div>

                    </div>
               )}


               {/* =====================================
               RESULT
               ===================================== */}

               {step === 3 && result && (
               <div className="mx-auto mt-12 max-w-4xl text-center">

               <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8DDE3]">
                    <Sparkles
                    size={26}
                    className="text-[var(--accent)]"
                    />
               </div>

               <p className="mt-5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#B5284D]">
                    Your Expert-Informed Recommendation
               </p>

               <h3 className="mt-3 font-heading text-3xl font-bold text-[#321720] md:text-5xl">
                    {result.title}
               </h3>

               <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-6 text-[#795763] md:text-base">
                    {result.description}
               </p>

               {/* Recommended products */}

               <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    {result.products.map((product) => (
                    <div
                         key={product}
                         className="
                         rounded-2xl
                         border
                         border-[var(--accent)]/10
                         bg-[#FFF7F8]
                         p-5
                         text-left
                         transition-all
                         duration-500
                         hover:border-[var(--accent)]/30
                         "
                         >
                         <p className="font-heading text-lg font-semibold text-[#321720]">
                         {product}
                         </p>

                         <p className="mt-1 font-sans text-xs text-[#856872]">
                         Recommended for your routine
                         </p>
                    </div>
                    ))}

               </div>

               {/* Buttons */}

               <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

                    <Link
                         href="#products"
                         className="
                         rounded-full
                         bg-[var(--accent)]
                         px-7
                         py-4
                         font-sans
                         text-sm
                         font-bold
                         text-white
                         transition-all
                         duration-500
                         hover:-translate-y-0.5
                         hover:opacity-90
                         "
                    >
                    VIEW RECOMMENDED PRODUCTS
                    </Link>

                    <button
                         onClick={resetFinder}
                         className="
                         flex
                         items-center
                         gap-2
                         rounded-full
                         border
                         border-[var(--accent)]/20
                         px-7
                         py-4
                         font-sans
                         text-sm
                         font-bold
                         text-[var(--accent)]
                         transition-all
                         duration-500
                         hover:bg-[var(--accent)]/10
                         "
                    >
                         <RotateCcw size={15} />
                         START AGAIN
                    </button>

               </div>

               {/* Disclaimer */}

               <p className="mx-auto mt-8 max-w-xl text-xs leading-5 text-[#A0838B]">
                    This tool provides general, expert-informed skincare
                    recommendations based on the information you provide.
                    It is not a medical diagnosis or substitute for advice
                    from a qualified dermatologist or healthcare professional.
               </p>

               </div>
               )}

          </div>
      </div>
    </section>
  );
};

export default Features;