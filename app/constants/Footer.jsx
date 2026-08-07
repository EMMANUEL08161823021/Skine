import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3D0716] px-6 pb-8 pt-16 text-[#FFF7F8] md:px-10 lg:px-16">

      <div className="mx-auto max-w-[1500px]">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}

          <div className="max-w-xs">

            <Link
              href="/"
              className="font-heading text-5xl font-bold tracking-[-0.06em] text-[#FFF7F8]"
            >
              SKINCARE
            </Link>

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
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="#products"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Our Products
              </Link>

              <Link
                href="#about"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="#skin-finder"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Skin Finder
              </Link>

              <Link
                href="#contact"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
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
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Cleansers
              </Link>

              <Link
                href="#products"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Moisturizers
              </Link>

              <Link
                href="#products"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
              >
                Serums
              </Link>

              <Link
                href="#products"
                className="font-sans text-sm text-[#E9C9D1] transition hover:text-white"
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
                className="h-14 min-w-0 flex-1 rounded-full border border-white/10 bg-white px-6 font-sans text-sm text-[#321720] outline-none placeholder:text-[#9A858A] focus:ring-2 focus:ring-[#E7AFC0]"
              />

              <button
                type="submit"
                className="h-14 rounded-full bg-[#FFF4E6] px-7 font-sans text-sm font-bold text-[#3D0716] shadow-[0_4px_0_#18050B] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
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
              className="font-sans text-xs text-[#CFAEB7] transition hover:text-white md:text-sm"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="font-sans text-xs text-[#CFAEB7] transition hover:text-white md:text-sm"
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