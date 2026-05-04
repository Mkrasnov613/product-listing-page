"use client";

import { useState } from "react";
import {
  FilterBar,
  SearchInput,
  PriceInputs,
  PriceInput,
  Separator,
  ToggleLabel,
  ActiveDot,
  ClearButton,
  HideButton,
  ShowButton,
} from "./FilterPanel.styled";
import { Filters as FiltersIcon } from "../icons/Filters/Filters";

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
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <ShowButton onClick={() => setIsOpen(true)}>
        <FiltersIcon />
        Filters {isActive(filters) && <ActiveDot />}
      </ShowButton>
    );
  }

  return (
    <FilterBar>
      <SearchInput
        type="search"
        placeholder="Search products..."
        value={filters.search}
        onChange={(e) => onChange({ ...filters, search: e.target.value })}
      />

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

      {isActive(filters) && (
        <ClearButton onClick={() => onChange(DEFAULT_FILTERS)}>
          Clear
        </ClearButton>
      )}

      <HideButton onClick={() => setIsOpen(false)}>Hide filters</HideButton>
    </FilterBar>
  );
};
