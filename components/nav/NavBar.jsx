import Link from "next/link";
import NavItems from "./nav-items";
import CartAction from "./cart-action";
import getCategories from "@/actions/getCategories";

export default async function NavBar() {
  const categories = await getCategories();
  // console.log(categories);
  return (
    <section className=" border-b">
      <nav className="container mx-auto h-[60px] md:h-[80px] flex items-center justify-between ">
        <div className=" flex items-center gap-10">
          <Link href={"/"}>
            <h1 className=" text-xl font-semibold uppercase">Hub Shop</h1>
          </Link>
          <NavItems data={categories} />
        </div>
        <CartAction />
      </nav>
    </section>
  );
}
