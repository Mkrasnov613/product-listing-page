import { ApiResponse } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export async function fetchProducts(): Promise<ApiResponse> {
  const response = await fetch(API_URL, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  const data: ApiResponse = await response.json();

  return data;
}
