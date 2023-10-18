import React from "react";

export default function HomeBanner() {
  return (
    <section className=" mt-5">
      <div className=" container max-auto px-6">
        <div
          className=" bg-cover h-[200px] md:h-[350px] rounded-md grid place-items-center overflow-hidden"
          style={{ backgroundImage: `url('/hero-banner.avif')` }}
        >
          <div className="">
            <h1 className=" text-gray-50 font-bold text-3xl sm:text-5xl lg:text-6xl drop-shadow-md">
              Meet the New You
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
