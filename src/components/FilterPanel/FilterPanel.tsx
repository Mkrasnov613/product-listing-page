"use client";

import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Panel,
  FilterButton,
  ModalOverlay,
  ModalBox,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  SearchInput,
  Section,
  SectionTitle,
  PriceInputs,
  PriceInput,
  Separator,
  ToggleLabel,
  ClearButton,
} from "./FilterPanel.styled";

export interface Filters {
  search: string;
  priceMin: string;
  priceMax: string;
  onSaleOnly: boolean;
}

export const DEFAULT_FILTERS: Filters = {
  search: "",
  priceMin: "",
  priceMax: "",
  onSaleOnly: false,
};

interface FilterPanelProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const FilterContent = ({ filters, onChange }: FilterPanelProps) => (
  <>
    <SearchInput
      type="search"
      placeholder="Search products..."
      value={filters.search}
      onChange={(e) => onChange({ ...filters, search: e.target.value })}
    />

    <Section>
      <SectionTitle>Price</SectionTitle>
      <PriceInputs>
        <PriceInput
          type="number"
          min={0}
          placeholder="Min"
          value={filters.priceMin}
          onChange={(e) => onChange({ ...filters, priceMin: e.target.value })}
        />
        <Separator>—</Separator>
        <PriceInput
          type="number"
          min={0}
          placeholder="Max"
          value={filters.priceMax}
          onChange={(e) => onChange({ ...filters, priceMax: e.target.value })}
        />
      </PriceInputs>
    </Section>

    <Section>
      <SectionTitle>Promotion</SectionTitle>
      <ToggleLabel>
        <input
          type="checkbox"
          checked={filters.onSaleOnly}
          onChange={(e) => onChange({ ...filters, onSaleOnly: e.target.checked })}
        />
        On sale only
      </ToggleLabel>
    </Section>

    <ClearButton onClick={() => onChange(DEFAULT_FILTERS)}>
      Clear filters
    </ClearButton>
  </>
);

export const FilterPanel = ({ filters, onChange }: FilterPanelProps) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  if (isMobile) {
    return (
      <>
        <FilterButton onClick={() => setIsOpen(true)}>⚙ Filters</FilterButton>
        {isOpen && (
          <ModalOverlay onClick={() => setIsOpen(false)}>
            <ModalBox onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>Filters</ModalTitle>
                <ModalCloseButton onClick={() => setIsOpen(false)} aria-label="Close">✕</ModalCloseButton>
              </ModalHeader>
              <FilterContent filters={filters} onChange={onChange} />
            </ModalBox>
          </ModalOverlay>
        )}
      </>
    );
  }

  return (
    <Panel>
      <FilterContent filters={filters} onChange={onChange} />
    </Panel>
  );
};
