import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
