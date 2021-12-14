import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ProductBackRoutingModule } from './product-back-routing.module';
import { MainProductComponent } from './main-product/main-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DetailProductBackComponent } from './detail-product-back/detail-product-back.component';
import { AssignProductTorayonComponent } from './assign-product-torayon/assign-product-torayon.component';
import { ConsulterNoteComponent } from './Note/consulter-note/consulter-note.component';
import { RevenuBrutComponent } from './revenu-brut/revenu-brut.component';

@NgModule({
  declarations: [
    MainProductComponent,
    ListProductComponent,
    AddproductComponent,
    UpdateProductComponent,
    DetailProductBackComponent,
    AssignProductTorayonComponent,
    ConsulterNoteComponent,
    RevenuBrutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ProductBackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule

  ]
})
export class ProductBackModule { }
