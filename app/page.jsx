import ProductLists from "@/components/product/product-list";
import HomeBanner from "./(home)/HomeBanner";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <ProductLists />
    </main>
  );
}
