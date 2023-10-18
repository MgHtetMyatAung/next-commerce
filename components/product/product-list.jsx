import React from "react";
import ProductCard from "./product-card";

const arr = new Array(4).fill("");
export default function ProductLists() {
  return (
    <section>
      <div className="container mx-auto py-12">
        <h1 className=" text-xl font-semibold text-center">Latest Arrivals</h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {arr.map((ar, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
