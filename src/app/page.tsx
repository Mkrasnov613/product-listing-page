import Image from "next/image";
import styles from "./page.module.css";
import { fetchProducts } from "@/services/productsApi";
import ProductList from "@/components/ProductList/ProductList";

export default async function Home() {
  const data = await fetchProducts();

  return <ProductList products={data.products} />;
}
