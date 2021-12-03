import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from '../detail-product/detail-product.component';



@NgModule({
  declarations: [
    ProductListComponent,
    SidebarComponent,
    DetailProductComponent

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class ProductModule { }
