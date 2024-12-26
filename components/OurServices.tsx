"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const OurServices = () => {
  return (
    <div className="py-20" id="services">
      <h1 className="heading">
        Transforming Ideas into Reality:{" "}
        <span className="text-blue">Our Services</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-40 gap-y-6 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[36rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] mb-2 sm:mb-6 lg:mb-2"
            key={item.id}
          >
            <PinContainer
              title="Know More"
              href={item.link} 
            >
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
                  className="z-10 absolute bottom-0"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
