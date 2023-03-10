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
import { ProductItemComponent } from './core/components/products-view/product-item/product-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsDialogComponent } from './core/components/products-view/product-item/details-dialog/details-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DetailsItemComponent } from './core/components/products-view/product-item/details-item/details-item.component';
import { ProductListComponent } from './core/components/products-view/product-list/product-list.component';
import { NotFoundComponent } from './core/shared/not-found/not-found.component';
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
    ProductItemComponent,
    DetailsDialogComponent,
    DetailsItemComponent,
    ProductListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
