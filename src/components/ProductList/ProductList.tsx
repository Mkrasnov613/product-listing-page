"use client";

import { useState, useMemo } from "react";
import styled from "styled-components";
import { Product } from "@/types/api";
import { theme } from "@/theme";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { ProductModal } from "@/components/ProductModal/ProductModal";
import { FilterPanel, Filters, DEFAULT_FILTERS } from "@/components/FilterPanel/FilterPanel";

interface ProductListProps {
  products: Product[];
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  gap: ${theme.spacing.xl};
`;

const Grid = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 24px;
`;

const Empty = styled.p`
  font-family: ${theme.typography.fontFamilyBody};
  color: ${theme.colors.textMuted};
  font-size: ${theme.typography.fontSizeMedium};
`;

export const ProductList = ({ products }: ProductListProps) => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    const query = filters.search.toLowerCase().trim();
    return products.filter((p) => {
      if (query && !p.title.toLowerCase().includes(query) && !p.brandName.toLowerCase().includes(query)) return false;
      if (filters.priceMin !== "" && p.price < Number(filters.priceMin)) return false;
      if (filters.priceMax !== "" && p.price > Number(filters.priceMax)) return false;
      if (filters.onSaleOnly && !p.promotion) return false;
      return true;
    });
  }, [products, filters]);

  return (
    <>
      <Layout>
        <Grid>
          {filtered.length === 0 ? (
            <Empty>No products match the selected filters.</Empty>
          ) : (
            filtered.map((product) => (
              <ProductCard
                key={product.articleNumber}
                product={product}
                onAddToCart={() => void 0}
                onSelect={() => setSelected(product)}
              />
            ))
          )}
        </Grid>

        <FilterPanel filters={filters} onChange={setFilters} />
      </Layout>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};
