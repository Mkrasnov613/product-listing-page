import { fetchProducts } from "@/services/productsApi";
import { ProductList } from "@/components/ProductList/ProductList";
import { WelcomeSection } from "@/components/WelcomeSection/WelcomeSection";

export default async function Home() {
  const data = await fetchProducts();

  if (!data || !data.products) {
    return (
      <main>
        <p>Failed to load Products</p>
      </main>
    );
  }

  return (
    <>
      <WelcomeSection />
      <ProductList products={data.products} />
    </>
  );
}
