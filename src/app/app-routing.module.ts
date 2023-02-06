import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsItemComponent } from './core/components/products-view/product-item/details-item/details-item.component';
import { ProductListComponent } from './core/components/products-view/product-list/product-list.component';
import { NotFoundComponent } from './core/shared/not-found/not-found.component';

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
    path: 'details/:id',
    component: DetailsItemComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
