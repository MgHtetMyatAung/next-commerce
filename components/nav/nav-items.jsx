"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavItems({ data }) {
  const pathname = usePathname();
  const links = data.map((item) => ({
    href: `/categories/${item.slug}`,
    label: item.name,
    isActive: pathname === `/categories/${item.slug}`,
  }));
  console.log(links);
  return (
    <div className=" hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            " font-semibold hover:text-gray-800 hover:underline transition-colors",
            link.isActive ? " text-gray-800" : " text-gray-500"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
