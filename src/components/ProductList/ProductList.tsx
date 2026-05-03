"use client";

import styled from "styled-components";
import { Product } from "@/types/api";
import ProductCard from "@/components/ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  max-width: 820px;
  gap: 20px 40px;
  margin: 20px 40px
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
