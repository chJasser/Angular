import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductBackRoutingModule } from './product-back-routing.module';
import { MainProductComponent } from './main-product/main-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    MainProductComponent,
    ListProductComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    ProductBackRoutingModule
  ]
})
export class ProductBackModule { }
