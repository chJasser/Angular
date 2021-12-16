import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddproductComponent } from './addproduct/addproduct.component';
import { AssignProductTorayonComponent } from './assign-product-torayon/assign-product-torayon.component';
import { ChartProductComponent } from './chart-product/chart-product.component';
import { DetailProductBackComponent } from './detail-product-back/detail-product-back.component';
import { ListProductComponent } from './list-product/list-product.component';
import { MainProductComponent } from './main-product/main-product.component';
import { RevenuBrutComponent } from './revenu-brut/revenu-brut.component';

const routes: Routes = [

{  path: '',component: MainProductComponent,  children: [
  {
    path: '',
    component: ListProductComponent,
    children: [{ path: 'addproduit', component: AddproductComponent }],
  },
  {
    path: 'detailProduct/:id',
    component: DetailProductBackComponent,

  },
  {
    path: 'getRevenubrut',
    component: RevenuBrutComponent,

  },
  {
    path: 'assginProductTorayon',
    component: AssignProductTorayonComponent,

  },

]
}


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductBackRoutingModule { }
