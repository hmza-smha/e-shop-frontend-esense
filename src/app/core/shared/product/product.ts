export interface Product {
  id: number;
  name: string;
  price: number;
  inStuck: boolean;
  available: boolean;
  imageUrl?: string;
  description?: string;
  additionalInfo?: string;
  oldPrice?: number;
  rate?: number;
  reviews?: Review[];
}

export interface Review{
  id: number,
  username: string,
  rate: number,
  description: string
}
