export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

export interface ProductsResponse {
  products: Product[];
  count: number;
}
