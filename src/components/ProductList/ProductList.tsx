"use client";

import { useState } from "react";
import styled from "styled-components";
import { Product } from "@/types/api";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductModal } from "@/components/ProductModal/ProductModal";

interface ProductListProps {
  products: Product[];
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 234px));
  justify-content: center;
  max-width: 1240px;
  gap: 20px 40px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 0 12px;
    max-width: 100%;
  }
`;

export const ProductList = ({ products }: ProductListProps) => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard
            key={product.articleNumber}
            product={product}
            onSelect={() => setSelected(product)}
          />
        ))}
      </Grid>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};
