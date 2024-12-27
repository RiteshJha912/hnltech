"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const OurServices = () => {
  // State to track visibility for each card
  const [inView, setInView] = useState<boolean[]>(new Array(projects.length).fill(false));

  useEffect(() => {
    const observers = projects.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setInView((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        { threshold: 0.3 }
      );

      const target = document.getElementById(`service-${index}`);
      if (target) observer.observe(target);

      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [projects.length]);

  return (
    <div className="py-20 mt-20" id="services">
      <h1 className="heading">
        Transforming Ideas into Reality:{" "}
        <span className="text-blue">Our Services</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-40 gap-y-6 mt-10">
        {projects.map((item, index) => (
          <motion.div
            id={`service-${index}`} // Unique ID for each card
            className="lg:min-h-[36rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] mb-2 sm:mb-6 lg:mb-2"
            key={item.id}
            initial={{ opacity: 0, y: 50 }} // Starting state: hidden and shifted
            animate={{
              opacity: inView[index] ? 1 : 0,
              y: inView[index] ? 0 : 50,
            }} // Slide up individually for each card
            transition={{ duration: 0.5 }}
          >
            <PinContainer title="Know More" href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover w-full h-full rounded-t-2xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
