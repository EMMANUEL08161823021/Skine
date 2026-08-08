"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./constants/Footer";

import { products } from "./data/products";




export default function Home() {
  const [active, setActive] = useState(0);

  const activeProduct = products[active];

  return (
    <main
      style={{
        "--accent": activeProduct.accent,
        "--accent-light": activeProduct.accentLight,
        "--circle": activeProduct.circle,
        "--background": activeProduct.background,
        "--product-text": activeProduct.text,
      }}
    >
      <Hero
        products={products}
        active={active}
        setActive={setActive}
      />

      <Products
        product={activeProduct}
      />

      <About
        product={activeProduct}
      />

      <Features
        product={activeProduct}
      />

      <Contact
        product={activeProduct}
      />

      <Footer
        product={activeProduct}
      />
    </main>
  );
}