"use client";

import React, { useState } from "react";

const Contact = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          message: "",
     });

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value,
          });
     };

     const handleSubmit = (e) => {
          e.preventDefault();

          console.log("Form submitted:", formData);

          // Connect this later to your backend / Formspree / Resend / etc.
     };

     return (
          <section
          id="contact"
          style={{
          backgroundColor:
          "color-mix(in srgb, var(--accent) 10%, transparent)",
          }}
          className="w-full px-6 py-20 md:px-10 lg:px-16"
          >
          <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">

          {/* =========================================
               LEFT — CONTACT INFORMATION
          ========================================= */}

          <div className="flex flex-col justify-center">

               <h2
               className="
                    font-heading
                    text-5xl
                    font-bold
                    leading-[0.95]
                    tracking-[-0.04em]
                    text-[var(--accent)]
                    transition-colors
                    duration-500
                    md:text-6xl
               "
               >
               GET IN TOUCH
               </h2>


               <p className="mt-7 max-w-xl font-sans text-base leading-7 text-[#795763] md:text-lg">
               Have questions about our products, your skincare routine,
               or your order? Send us a message and our team will get
               back to you as soon as possible.
               </p>


               {/* LOCATION */}

               <div className="mt-9">

               <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-[#321720]">
                    <span className="text-lg">📍</span>
                    Headquarters
               </h3>

               <p className="mt-2 font-sans text-base text-[var(--accent)] transition-colors duration-500">
                    Lagos, Nigeria
               </p>

               </div>


               {/* EMAIL */}

               <div className="mt-7">

               <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-[#321720]">
                    <span className="text-lg">✉️</span>
                    Email Us
               </h3>

               <a
                    href="mailto:hello@yourbrand.com"
                    className="
                    mt-2
                    block
                    font-sans
                    text-base
                    text-[var(--accent)]
                    transition-all
                    duration-500
                    hover:underline
                    "
               >
                    hello@yourbrand.com
               </a>

               </div>


               {/* RESPONSE TIME */}

               <div
               className="
                    mt-8
                    inline-flex
                    w-fit
                    rounded-full
                    bg-[var(--accent)]
                    px-5
                    py-3
                    transition-colors
                    duration-500
               "
               style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
               }}
               >
               <span className="font-sans text-sm font-semibold text-[var(--accent)]">
                    We typically respond within 24 hours.
               </span>
               </div>

          </div>


          {/* =========================================
               RIGHT — CONTACT FORM
          ========================================= */}

          <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-5"
          >

               {/* NAME */}

               <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleChange}
               placeholder="Your Name"
               required
               className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-[#EBCED6]
                    bg-white
                    px-6
                    font-sans
                    text-base
                    text-[#321720]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#8B8587]
                    focus:border-[var(--accent)]
                    focus:ring-2
                    focus:ring-[var(--accent)]/10
               "
               />


               {/* EMAIL */}

               <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Your Email Address"
               required
               className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-[#EBCED6]
                    bg-white
                    px-6
                    font-sans
                    text-base
                    text-[#321720]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#8B8587]
                    focus:border-[var(--accent)]
                    focus:ring-2
                    focus:ring-[var(--accent)]/10
               "
               />


               {/* MESSAGE */}

               <textarea
               name="message"
               value={formData.message}
               onChange={handleChange}
               placeholder="Your Message or Special Request..."
               required
               rows={6}
               className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#EBCED6]
                    bg-white
                    px-6
                    py-5
                    font-sans
                    text-base
                    text-[#321720]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#8B8587]
                    focus:border-[var(--accent)]
                    focus:ring-2
                    focus:ring-[var(--accent)]/10
               "
               />


               {/* SUBMIT */}

               <button
               type="submit"
               className="
                    w-fit
                    rounded-full
                    bg-[var(--accent)]
                    px-10
                    py-4
                    font-sans
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_6px_0_#4A111F]
                    transition-all
                    duration-500
                    hover:-translate-y-0.5
                    hover:opacity-90
                    hover:shadow-[0_7px_0_#4A111F]
                    active:translate-y-1
                    active:shadow-[0_2px_0_#4A111F]
               "
               >
               SEND MESSAGE
               </button>

          </form>

          </div>
          </section>
     );
};

export default Contact;