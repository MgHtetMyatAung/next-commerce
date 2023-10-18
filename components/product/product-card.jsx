"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Fullscreen } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductCard() {
  const router = useRouter();
  const preventBubbling = (e) => {
    e.stopPropagation();
  };
  return (
    <article onClick={() => router.push(`/product/12`)}>
      <div className=" relative aspect-square w-full group">
        <Image
          src={"https://picsum.photos/400/600"}
          alt="image"
          fill
          className=" aspect-square w-full object-cover rounded-md overflow-hidden"
        />
        <div
          onClick={preventBubbling}
          className=" absolute flex items-center justify-center gap-3 w-full bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <Button variant="secondary">
            <Fullscreen size={20} className=" text-gray-800" />
          </Button>
          <Button variant="secondary">
            <ShoppingCart size={20} className=" text-gray-800" />
          </Button>
        </div>
      </div>
      <div className=" p-3">
        <h2 className=" font-semibold">T-Shirt</h2>
        <p>Man Fashion</p>
        <p>$ 60</p>
      </div>
    </article>
  );
}
