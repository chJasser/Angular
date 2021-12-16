import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from '../detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component:  ProductListComponent,},
    {
      path: 'detailProduct/:id',
      component: DetailProductComponent,
  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
