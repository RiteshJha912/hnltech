"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="reviews" className="py-20">
      <h1 className="heading">
        Hear From Our  {' '}
        <span className="text-blue">Valued Partners</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 ">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden "
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        </div>
    </section>
  );
};

export default Clients;