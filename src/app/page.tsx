import { fetchProducts } from "@/services/productsApi";
import { ProductList } from "@/components/ProductList/ProductList";
import { Header } from "@/components/Header/Header";

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
      <ProductList products={data.products} />
    </>
  );
}
