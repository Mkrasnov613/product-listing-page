# Columbus Shop — Product Listing Page

A responsive product listing page built as a front-end project. It fetches products from an external API and presents them with filtering, a product detail modal, and a shopping cart.

# Vercel link: https://product-listing-page-rust.vercel.app/

---

## Tech Stack

| Tool                                                            | Purpose                                        |
| --------------------------------------------------------------- | ---------------------------------------------- |
| [Next.js 16](https://nextjs.org/)                               | React framework, App Router, SSR, `next/image` |
| [React 19](https://react.dev/)                                  | UI library                                     |
| [TypeScript](https://www.typescriptlang.org/)                   | Static typing                                  |
| [styled-components 6](https://styled-components.com/)           | CSS-in-JS component styling                    |
| [react-responsive](https://github.com/yodalee/react-responsive) | `useIsMobile` media-query hook                 |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — providers, header, SSR style registry
│   ├── page.tsx            # Home page — hero + product list
│   └── globals.css         # @font-face rules, CSS reset
├── components/
│   ├── Header/             # Fixed nav with logo and cart button
│   ├── WelcomeSection/     # Hero banner with background image
│   ├── ProductList/        # Grid + sticky filter toolbar
│   ├── ProductCard/        # Individual product card
│   ├── ProductModal/       # Full-screen product detail modal
│   ├── FilterPanel/        # Inline filter row (search, price, on-sale)
│   ├── CartModal/          # Slide-in cart drawer
│   ├── ui/
│   │   └── CloseButton.tsx # Shared close button (supports absolute positioning)
│   └── icons/              # SVG icon components (Cart, AddToCart, Delete, Search, Filters)
├── context/
│   ├── CartContext.tsx     # Cart state — items with quantity, add/decrement/remove/clear
│   └── SnackbarContext.tsx # Toast notification state
├── hooks/
│   └── useIsMobile.ts      # Media query hook (≤ 768 px)
├── lib/
│   └── StyledComponentsRegistry.tsx  # SSR style collection for styled-components
├── services/
│   └── productsApi.ts      # Fetch wrapper for the products API
├── styles/
│   └── mixins.ts           # Shared CSS mixins (altTextStyles for broken images)
├── theme.ts                # Design tokens — colors, typography, spacing, shadows
└── types/
    └── api.ts              # TypeScript types for the API response
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

