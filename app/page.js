import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Products/>
      <About/>
      <Features/>
      <Contact/>
    </main>
  );
}
