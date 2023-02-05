import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsItemComponent } from './core/components/products-view/product-item/details-item/details-item.component';
import { ProductListComponent } from './core/components/products-view/product-list/product-list.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product',
    component: DetailsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
