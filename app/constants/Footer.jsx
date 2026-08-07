import React from "react";
import Link from "next/link";

const Footer = () => {
     return (
          <footer className="w-full bg-[var(--accent)] px-6 pb-8 pt-16 text-[#FFF7F8] md:px-10 lg:px-16">

          <div className="mx-auto max-w-7xl">

          {/* =========================================
               MAIN FOOTER
          ========================================= */}

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

               {/* BRAND */}

               <div className="max-w-xs">

                    <h1>
                         <Link
                         href="/"
                         className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
                         >
                         SKIN<span className="text-[var(--accent)]">É</span>
                         </Link>
                    </h1>

                    <p className="mt-6 font-sans text-sm leading-6 text-[#E9C9D1]">
                         Thoughtfully selected skincare for healthier-looking,
                         confident skin. Simple routines, effective care.
                    </p>

               </div>


               {/* QUICK LINKS */}

               <div>

               <h3 className="font-heading text-lg font-semibold">
                    QUICK LINKS
               </h3>

               <div className="mt-6 flex flex-col gap-4">

                    <Link
                    href="/"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Home
                    </Link>

                    <Link
                    href="#products"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Our Products
                    </Link>

                    <Link
                    href="#about"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    About Us
                    </Link>

                    <Link
                    href="#skin-finder"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Skin Finder
                    </Link>

                    <Link
                    href="#contact"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Contact Us
                    </Link>

               </div>

               </div>


               {/* SHOP */}

               <div>

               <h3 className="font-heading text-lg font-semibold">
                    SHOP SKINCARE
               </h3>

               <div className="mt-6 flex flex-col gap-4">

                    <Link
                    href="#products"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Cleansers
                    </Link>

                    <Link
                    href="#products"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Moisturizers
                    </Link>

                    <Link
                    href="#products"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Serums
                    </Link>

                    <Link
                    href="#products"
                    className="
                    font-sans
                    text-sm
                    text-[#E9C9D1]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    "
                    >
                    Best Sellers
                    </Link>

               </div>

               </div>


               {/* NEWSLETTER */}

               <div>

               <h3 className="font-heading text-lg font-semibold">
                    GET UPDATES
               </h3>

               <p className="mt-6 max-w-sm font-sans text-sm leading-6 text-[#E9C9D1]">
                    Get skincare tips, product updates, exclusive offers
                    and new product launches straight to your inbox.
               </p>


               {/* EMAIL FORM */}

               <form className="mt-5 flex flex-col gap-3 sm:flex-row">

                    <input
                    type="email"
                    placeholder="Your email..."
                    className="
                    h-14
                    min-w-0
                    flex-1
                    rounded-full
                    border
                    border-white/10
                    bg-white
                    px-6
                    font-sans
                    text-sm
                    text-[#321720]
                    outline-none
                    placeholder:text-[#9A858A]
                    transition-all
                    duration-300
                    focus:border-[var(--accent)]
                    focus:ring-2
                    focus:ring-[var(--accent)]/20
                    "
                    />

                    <button
                    type="submit"
                    className="
                    h-14
                    rounded-full
                    bg-[var(--accent)]
                    px-7
                    font-sans
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_4px_0_#18050B]
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:opacity-90
                    active:translate-y-1
                    active:shadow-none
                    "
                    >
                    JOIN
                    </button>

               </form>

               </div>

          </div>


          {/* =========================================
               DIVIDER
          ========================================= */}

          <div className="my-14 h-px w-full bg-white/15" />


          {/* =========================================
               BOTTOM
          ========================================= */}

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

               <p className="font-sans text-xs text-[#CFAEB7] md:text-sm">
               © 2026 Your Skincare Brand. All rights reserved.
               </p>


               <div className="flex gap-6">

               <Link
                    href="/privacy"
                    className="
                    font-sans
                    text-xs
                    text-[#CFAEB7]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    md:text-sm
                    "
               >
                    Privacy Policy
               </Link>

               <Link
                    href="/terms"
                    className="
                    font-sans
                    text-xs
                    text-[#CFAEB7]
                    transition-all
                    duration-300
                    hover:text-[var(--accent)]
                    md:text-sm
                    "
               >
                    Terms of Service
               </Link>

               </div>

          </div>

          </div>

          </footer>
     );
};

export default Footer;