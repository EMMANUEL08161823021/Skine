"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./constants/Footer";


const products = [
     {
          id: 1,

          name: "Foaming Cleanser",

          subtitle: "For Normal to Oily Skin",

          description:
               "A gentle foaming cleanser that removes excess oil while helping maintain the skin's natural protective barrier.",

          price: "₦18,500",

          tag: "BEST SELLER",

          image: "/products/foaming-cleanser.png",

          // Green CeraVe product
          background: "#DCEBDD",

          accentLight: "#E7EFE2",

          circle: "#B8D7B9",

          accent: "#2E9E5B",

          text: "#19352A",
     },
     {
          id: 2,

          name: "Renewing SA Cleanser",

          subtitle: "For Normal Skin",

          description:
               "A renewing cleanser formulated with salicylic acid to gently cleanse and exfoliate while helping smooth the skin.",

          price: "₦21,500",

          tag: "NEW",

          image: "/products/renewing-cleanser.png",

          // Blue SA product
          background: "#E0EFF7",

          accentLight: "#E4F3F0",

          circle: "#B9DCEC",

          accent: "#1689C2",

          text: "#173D52",
     },

     {
          id: 3,

          name: "Hydrating Cleanser",

          subtitle: "For Normal to Dry Skin",

          description:
               "A hydrating cleanser that cleanses without disrupting the skin's natural protective barrier.",

          price: "₦20,000",

          tag: "POPULAR",

          image: "/products/hydrating-cleanser.png",

          // Blue product
          background: "#DDEBF5",

          accentLight: "#E6EFF5",

          circle: "#B7D5E8",

          accent: "#2382B8",

          text: "#16384C",
     },

];


export default function Home() {
  const [active, setActive] = useState(0);

  const activeProduct = products[active];

  return (
    <main
      style={{
        "--accent": activeProduct.accent,
        "--accent-light": activeProduct.accentLight,
      }}
    >
      <Hero
        products={products}
        active={active}
        setActive={setActive}
      />

      <Products />

      <About />

      <Features />

      <Contact />

      <Footer/>

    </main>
  );
}