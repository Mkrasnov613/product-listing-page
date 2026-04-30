"use client";

import styled from "styled-components";
import { Product } from "@/types/api";
import ProductCard from "@/components/ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  padding: 32px;
`;

export default function ProductList({ products }: ProductListProps) {

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard
          key={product.articleNumber}
          product={product}
          onAddToCart={() => void 0}
        />
      ))}
    </Grid>
  );
}
