import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider'
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from '../detail-product/detail-product.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
    
    
    
  ]
})
export class ProductModule { }
