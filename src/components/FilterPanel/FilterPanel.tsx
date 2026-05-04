"use client";

import { useState, useEffect, useRef } from "react";
import {
  Wrapper,
  ToggleBtn,
  ActiveDot,
  Popup,
  SearchInput,
  Section,
  SectionTitle,
  PriceInputs,
  PriceInput,
  Separator,
  ToggleLabel,
  ClearButton,
} from "./FilterPanel.styled";
import { Filters } from "../icons/Filters/Filters";

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

const isActive = (f: Filters) =>
  f.search !== "" || f.priceMin !== "" || f.priceMax !== "" || f.onSaleOnly;

export const FilterPanel = ({ filters, onChange }: FilterPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <Wrapper ref={wrapperRef}>
      <ToggleBtn onClick={() => setIsOpen((v) => !v)}>
        {isActive(filters) && <ActiveDot />}
        <Filters />
        Filters
      </ToggleBtn>

      {isOpen && (
        <Popup>
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
                onChange={(e) =>
                  onChange({ ...filters, priceMin: e.target.value })
                }
              />
              <Separator>—</Separator>
              <PriceInput
                type="number"
                min={0}
                placeholder="Max"
                value={filters.priceMax}
                onChange={(e) =>
                  onChange({ ...filters, priceMax: e.target.value })
                }
              />
            </PriceInputs>
          </Section>

          <Section>
            <SectionTitle>Promotion</SectionTitle>
            <ToggleLabel>
              <input
                type="checkbox"
                checked={filters.onSaleOnly}
                onChange={(e) =>
                  onChange({ ...filters, onSaleOnly: e.target.checked })
                }
              />
              On sale only
            </ToggleLabel>
          </Section>

          <ClearButton onClick={() => onChange(DEFAULT_FILTERS)}>
            Clear filters
          </ClearButton>
        </Popup>
      )}
    </Wrapper>
  );
};
