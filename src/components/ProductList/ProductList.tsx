"use client";

import { useState, useMemo } from "react";
import styled from "styled-components";
import { Product } from "@/types/api";
import { theme } from "@/theme";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductModal } from "@/components/ProductModal/ProductModal";
import {
  FilterPanel,
  Filters,
  DEFAULT_FILTERS,
} from "@/components/FilterPanel/FilterPanel";

interface ProductListProps {
  products: Product[];
}

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
`;

const Empty = styled.p`
  font-family: ${theme.typography.fontFamilyBody};
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSizeMedium};
`;

const Toolbar = styled.div`
  position: sticky;
  top: 0px;
  z-index: 200;
  background: ${theme.colors.bgDark};
  display: flex;
  justify-content: flex-end;
  padding: ${theme.spacing.sm} 0;
`;

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
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    const query = filters.search.toLowerCase().trim();
    return products.filter((p) => {
      const effectivePrice = p.promotion
        ? Math.round(p.price * (1 - p.promotion.percentage / 100))
        : p.price;
      if (
        query &&
        !p.title.toLowerCase().includes(query) &&
        !p.brandName.toLowerCase().includes(query)
      )
        return false;
      if (filters.priceMin !== "" && effectivePrice < Number(filters.priceMin))
        return false;
      if (filters.priceMax !== "" && effectivePrice > Number(filters.priceMax))
        return false;
      if (filters.onSaleOnly && !p.promotion) return false;
      return true;
    });
  }, [products, filters]);

  return (
    <>
      <Container>
        <Toolbar>
          <FilterPanel filters={filters} onChange={setFilters} />
        </Toolbar>

        <Grid>
          {filtered.length === 0 ? (
            <Empty>No products match the selected filters.</Empty>
          ) : (
            filtered.map((product) => (
              <ProductCard
                key={product.articleNumber}
                product={product}
                onSelect={() => setSelected(product)}
              />
            ))
          )}
        </Grid>
      </Container>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};
