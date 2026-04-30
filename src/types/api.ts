export interface Image {
  link: string;
  altText: string;
}

export interface Promotion {
  name: string;
  percentage: number; // 0–100
}

export interface Product {
  articleNumber: string;  // 7 digits
  ean: string;            // 13 digits
  link: string;           // starts with /
  image: Image;
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;          // in cents or smallest unit
  promotion: Promotion | null;
}

export interface ApiResponse {
  title: string;
  logo: Image;
  products: Product[];
}