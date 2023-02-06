export interface Category {
  name: string;
  products?: Category[];
  subProducts?: Category[];
  children?: Category[];
  // subCategories?: Category[];
}
