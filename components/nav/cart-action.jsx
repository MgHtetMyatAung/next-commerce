import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

export default function CartAction() {
  return (
    <div>
      <Button className={" flex items-center gap-2 rounded-full"}>
        <ShoppingBag size={20} />
        <span>{10}</span>
      </Button>
    </div>
  );
}
