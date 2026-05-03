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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  max-width: 820px;
  gap: 20px 40px;
  margin: 0 auto;
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
            onAddToCart={() => void 0}
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
