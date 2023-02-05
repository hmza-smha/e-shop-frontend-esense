import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  name: string;
  products?: Category[];
  subProducts?: Category[];
  children?: Category[];
  // subCategories?: Category[];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
