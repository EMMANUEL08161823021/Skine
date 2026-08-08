"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
// } from "react-icons/fa";




const Hero = ({ products, active, setActive }) => {
     // const [active, setActive] = useState(0);

     useEffect(() => {
     const interval = setInterval(() => {
          setActive((current) => (current + 1) % products.length);
     }, 7000);

     return () => clearInterval(interval);
     }, []);
     const [activeTab, setActiveTab] = useState("HOME");

     const product = products[active];


     const nextProduct = () => {
     setActive((current) => (current + 1) % products.length);
     };


     const previousProduct = () => {
     setActive(
          (current) =>
          (current - 1 + products.length) % products.length
     );
     };


     return (
          <main
               className="relative min-h-screen overflow-hidden transition-colors duration-700"
               style={{
               backgroundColor: product.background,
               color: product.text,
               }}
          >

               {/* =========================================
                    NAVBAR
               ========================================= */}

               <header className="fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10 lg:px-14">

               <nav className="mx-auto flex max-w-[1400px] items-center justify-between">

                    {/* LOGO */}
                    <h1>
                         <Link
                         href="/"
                         className="text-2xl font-black tracking-[-0.08em] md:text-3xl"
                         >
                         SKIN<span style={{ color: product.accent }}>É</span>
                         </Link>
                    </h1>


                    {/* DESKTOP NAV */}

                    <div className="hidden items-center rounded-full bg-white p-1.5 shadow-sm md:flex">
                         <NavLink
                         href="/"
                         active={activeTab === "HOME"}
                         onClick={() => setActiveTab("HOME")}
                         accent={product.accent}
                         >
                         HOME
                         </NavLink>

                         <NavLink
                         href="#products"
                         active={activeTab === "PRODUCTS"}
                         onClick={() => setActiveTab("PRODUCTS")}
                         accent={product.accent}
                         >
                         PRODUCTS
                         </NavLink>

                         <NavLink
                         href="#about"
                         active={activeTab === "ABOUT"}
                         onClick={() => setActiveTab("ABOUT")}
                         accent={product.accent}
                         >
                         ABOUT
                         </NavLink>

                         <NavLink
                         href="#skin-finder"
                         active={activeTab === "FEATURES"}
                         onClick={() => setActiveTab("FEATURES")}
                         accent={product.accent}
                         >
                         FEATURES
                         </NavLink>

                         <NavLink
                         href="#contact"
                         active={activeTab === "CONTACT"}
                         onClick={() => setActiveTab("CONTACT")}
                         accent={product.accent}
                         >
                         CONTACT
                         </NavLink>
                    </div>


                    {/* ACTIONS */}

                    <div className="flex items-center gap-2">

                         <Link
                         href="/routine"
                         className="flex h-11 w-11 items-center justify-center rounded-full bg-white transition hover:scale-105"
                         >
                         <Sparkles size={19} />
                         </Link>


                         <Link
                         href="/cart"
                         className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white transition hover:scale-105"
                         >

                         <ShoppingBag size={19} />

                         <span
                              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                              style={{
                              backgroundColor: product.accent,
                              }}
                         >
                              2
                         </span>

                         </Link>

                    </div>

               </nav>

               </header>


               {/* =========================================
                    HERO
               ========================================= */}

               <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 pb-28 pt-32 md:px-10 lg:flex-row lg:items-center lg:px-14 lg:pt-20">

                    <div className="relative z-20 flex w-full flex-col justify-center lg:w-[48%]">

                         <AnimatePresence mode="wait">

                         <motion.div
                         key={product.id}
                         initial={{
                              opacity: 0,
                              y: 20,
                         }}
                         animate={{
                              opacity: 1,
                              y: 0,
                         }}
                         exit={{
                              opacity: 0,
                              y: -20,
                         }}
                         transition={{
                              duration: 0.35,
                         }}
                         >

                         {/* MAIN TITLE */}

                         <h1 className="max-w-[700px] text-[clamp(4rem,7vw,7.5rem)] font-black leading-[0.78] tracking-[-0.075em]">

                              {product.name.split(" ").map((word, index) => (
                              <span
                                   key={index}
                                   className="block"
                              >
                                   {word}
                              </span>
                              ))}

                         </h1>


                         {/* SUBTITLE */}

                         <p className="mt-7 text-lg font-semibold md:text-xl">
                              {product.subtitle}
                         </p>


                         {/* DESCRIPTION */}

                         <p className="mt-4 max-w-lg text-base leading-7 opacity-70 md:text-lg">
                              {product.description}
                         </p>


                         {/* PRICE + CTA */}

                         <div className="mt-8 flex flex-wrap items-center gap-4">

                              <span className="text-xl font-bold">
                              {product.price}
                              </span>


                              <Link
                              href="#products"
                              className="group flex items-center gap-4 rounded-full px-6 py-3.5 text-sm font-bold text-white transition hover:scale-[1.02]"
                              style={{
                                   backgroundColor: product.text,
                              }}
                              >

                              SHOP PRODUCT

                              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                                   <ArrowRight
                                   size={15}
                                   style={{
                                   color: product.text,
                                   }}
                                   />
                              </span>

                              </Link>

                         </div>

                         </motion.div>

                         </AnimatePresence>


                         {/* AI ROUTINE */}

                         <Link
                         href="#skin-finder"
                         className="mt-10 flex w-fit items-center gap-3 rounded-2xl bg-white p-3 shadow-lg transition hover:-translate-y-1"
                         >

                         <div
                         className="flex h-11 w-11 items-center justify-center rounded-xl"
                         style={{
                              backgroundColor: product.background,
                              color: product.accent,
                         }}
                         >
                         <Sparkles size={19} />
                         </div>

                         <div>

                         <p className="text-xs font-bold">
                              NOT SURE WHAT TO USE?
                         </p>

                         <p className="mt-1 text-[11px] text-gray-500">
                              Let our AI build your routine →
                         </p>

                         </div>

                         </Link>

                    </div>



                    {/* =====================================
                         RIGHT PRODUCT
                    ===================================== */}

                    <div className="relative mt-8 flex min-h-[520px] w-full items-center justify-center lg:mt-0 lg:min-h-[700px] lg:w-[52%]">


                         {/* LARGE BACKGROUND CIRCLE */}

                         <motion.div
                         className="absolute h-[350px] w-[350px] rounded-full md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px]"
                         animate={{
                         backgroundColor: product.circle,
                         scale: [0.97, 1],
                         }}
                         transition={{
                         duration: 0.7,
                         }}
                         />


                         {/* OUTER CIRCLE */}

                         <motion.div
                         className="absolute h-[410px] w-[410px] rounded-full border md:h-[560px] md:w-[560px] lg:h-[670px] lg:w-[670px]"
                         animate={{
                         borderColor: `${product.accent}40`,
                         }}
                         transition={{
                         duration: 0.7,
                         }}
                         />


                         {/* PRODUCT */}

                         <AnimatePresence mode="wait">

                         <motion.div
                         key={product.id}
                         className="relative z-10 h-[480px] w-[340px] md:h-[580px] md:w-[430px] lg:h-[650px] lg:w-[500px]"
                         initial={{
                              opacity: 0,
                              x: 70,
                              scale: 0.94,
                         }}
                         animate={{
                              opacity: 1,
                              x: 0,
                              scale: 1,
                         }}
                         exit={{
                              opacity: 0,
                              x: -70,
                              scale: 0.94,
                         }}
                         transition={{
                              duration: 0.5,
                              ease: "easeOut",
                         }}
                         >

                         <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              priority
                              className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)]"
                         />

                         </motion.div>

                         </AnimatePresence>


                         {/* PRODUCT TAG */}

                         <motion.div
                         key={`tag-${product.id}`}
                         initial={{
                         opacity: 0,
                         scale: 0.8,
                         }}
                         animate={{
                         opacity: 1,
                         scale: 1,
                         }}
                         className="absolute right-2 top-12 z-30 rounded-full bg-white px-5 py-3 text-xs font-bold tracking-wider shadow-md md:right-10"
                         >
                         {product.tag}
                         </motion.div>


                    </div>

               </div>

               <div className="absolute bottom-45 left-0 z-50 w-full">
                    <div className="mx-auto flex max-w-[1500px] items-center justify-center px-6 md:px-10 lg:px-14">

                    {/* ================= SLIDER ================= */}
                    <div className="flex items-center gap-3">

                    {/* PREVIOUS */}
                    <button
                    onClick={previousProduct}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#19352A] hover:text-white"
                    aria-label="Previous product"
                    >
                    <ArrowLeft size={17} />
                    </button>

                    {/* DOTS */}
                    <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-2 backdrop-blur-sm">

                    {products.map((item, index) => (
                         <button
                         key={item.id}
                         onClick={() => setActive(index)}
                         aria-label={`Show ${item.name}`}
                         className="flex items-center justify-center"
                         >
                         <span
                              className="block h-2.5 rounded-full transition-all duration-500"
                              style={{
                              width: active === index ? "30px" : "10px",
                              backgroundColor:
                              active === index
                                   ? item.accent
                                   : "#C9CEC8",
                              }}
                         />
                         </button>
                    ))}

                    </div>

                    {/* NEXT */}
                    <button
                    onClick={nextProduct}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-[#19352A] hover:text-white"
                    aria-label="Next product"
                    >
                    <ArrowRight size={17} />
                    </button>

                    </div>

                    {/* ================= SOCIALS ================= */}
                    {/* <div className="flex items-center gap-2">

                         <SocialIcon>
                         <FaInstagram size={16} />
                         </SocialIcon>

                         <SocialIcon>
                         <FaFacebookF size={15} />
                         </SocialIcon>

                         <SocialIcon>
                         <FaYoutube size={16} />
                         </SocialIcon>

                    </div> */}

                    </div>
               </div>

               <div
                    className="
                    pointer-events-none
                    absolute
                    -bottom-6
                    left-[-5%]
                    z-30
                    h-20
                    w-[110%]
                    rounded-[50%]
                    bg-[#F8F5EC]
                    "
               />
          </main>
     );
}



/* =========================================
   NAV LINK
========================================= */

const NavLink = ({
  href,
  children,
  active,
  onClick,
  accent,
}) => {
     return (
     <a
          href={href}
          onClick={onClick}
          className={`
          rounded-full px-6 py-2.5
          text-sm font-semibold
          transition-all duration-300
          ${
               active
               ? "text-white shadow-sm"
               : "text-[#3A302A] hover:bg-black/5"
          }
          `}
          style={{
          backgroundColor: active ? accent : "transparent",
          }}
     >
          {children}
     </a>
     );
};


function SocialIcon({ children }) {

  return (
    <button
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8E2D6] text-[#19352A] transition hover:bg-[#19352A] hover:text-white"
    >
      {children}
    </button>
  );
}

export default Hero;