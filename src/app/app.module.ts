import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PreHeaderComponent } from './core/components/header/pre-header/pre-header.component';
import { StyleCustomizationComponent } from './core/shared/style-customization/style-customization.component';
import { BreadcrumbComponent } from './core/shared/breadcrumb/breadcrumb.component';
import { ProductsViewComponent } from './core/components/products-view/products-view.component';
import { SidebarFilterComponent } from './core/components/products-view/sidebar-filter/sidebar-filter.component';
import { SidebarBestsellersComponent } from './core/components/products-view/sidebar-bestsellers/sidebar-bestsellers.component';
import { SidebarTreeComponent } from './core/components/products-view/sidebar-tree/sidebar-tree.component';
import { BrandsComponent } from './core/shared/brands/brands.component';
import { StepsComponent } from './core/shared/steps/steps.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { PreFooterComponent } from './core/components/footer/pre-footer/pre-footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from './core/shared/category/category.module';
import { ProductItemComponent } from './core/components/products-view/product-item/product-item.component';
import { ProductModule } from './core/shared/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PreHeaderComponent,
    StyleCustomizationComponent,
    BreadcrumbComponent,
    ProductsViewComponent,
    SidebarFilterComponent,
    SidebarBestsellersComponent,
    SidebarTreeComponent,
    BrandsComponent,
    StepsComponent,
    FooterComponent,
    PreFooterComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CategoryModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
