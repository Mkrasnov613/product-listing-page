import { fetchProducts } from "@/services/productsApi";
import { ProductList } from "@/components/ProductList/ProductList";
import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection";

export default async function Home() {
  const data = await fetchProducts();

  return (
    <>
      <WelcomeSection />
      {!data || !data.products ? (
        <p>Failed to load Products</p>
      ) : (
        <ProductList products={data.products} />
      )}
    </>
  );
}
